import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { parse } from "date-fns"
import { firstValueFrom } from "rxjs"

@Injectable ( {
  providedIn: "root"
} )
export class ApiService {

  public constructor (
    private http: HttpClient
  ) { }

  public getData ( category: string ) {
    return Promise.all ( [
      this.get ( "prayers.php", {
        category
      } ),
      this.get ( "feasts.php", {
        category
      } ),
      this.get ( "videos.php", {
        category
      } )
    ] )
  }

  private getDefaultHeaders ( method: string ) {
    const headers: any = { }
    if ( method == "POST" ) {
      headers [ "Content-Type" ] = "application/json;charset=UTF-8"
    }
    return headers
  }

  private removeFirstSlash ( url: string ) {
    return url [ 0 ] === "/" ? url.substring ( 1 ) : url
  }

  private get ( url: string, query: any = {}, options = {}, noHeaders = false ) {
    const headers: any = { ...this.getDefaultHeaders ( "GET" ), ...options }
    return new Promise<any> ( ( resolve, reject ) => {
      const request_url = `https://api.matthewfrankland.co.uk/revive-consecrations/${this.removeFirstSlash ( url )}/${this.toQueryString ( query )}`
      const responseType = headers.responseType || "json"
      delete headers.responseType
      firstValueFrom (
        this.http.get ( request_url, {
          headers: noHeaders ? {} : new HttpHeaders ( headers ),
          responseType: responseType
        } )
      ).then ( ( data: any ) => {
        if ( data === null ) {
          return resolve ( "" )
        }
        if ( responseType === "blob" ) {
          resolve ( {
            blob: data,
            mime: data.type
          } )
        } else {
          this.parseHTTPResponse ( data ).then ( resolve ).catch ( reject )
        }
      } ).catch ( reject )
    } )
  }

  private parseHTTPResponse ( data: any ) {
    return new Promise<any> ( ( resolve, reject ) => {
      if ( data.IQXResult && data.IQXResult.IQXFailure ) {
        return reject ( data.IQXResult.IQXFailure.attrs.message )
      } else if ( data.IQXResult && !data.IQXResult.Row ) {
        data.IQXResult.Row = [ ]
      }
      resolve ( this.parseObj ( data ) )
    } )
  }

  private toQueryString ( object: any ): string {
    if ( !object || Object.keys ( object ).length === 0 ) return ""
    return "?" + Object.keys ( object ).map ( key => key + "=" + ( object [ key ]?.toString ( ) || "" ) ).join ( "&" )
  }

  private parseObj ( obj: any ): any {
    const res = obj
    if ( res instanceof Object ) {
      for ( const key of Object.keys ( res ) ) {
        if ( res [ key ] ) {
          if ( Array.isArray ( res [ key ] ) ) {
            res [ key ] = res [ key ].map ( ( x: any ) => this.parseObj ( x ) )
          } else if ( typeof obj [ key ] === "object" ) {
            res [ key ] = this.parseObj ( res [ key ] )
          } else if ( this.isNumber ( res [ key ] ) ) {
            res [ key ] = Number ( res [ key ] )
          } else if ( this.isBool ( res [ key ] ) ) {
            res [ key ] = Boolean ( res [ key ] )
          }
          res [ key ] = this.checkDate ( res [ key ] )
        }
      }
    }
    return res
  }

  private isBool = ( value: string ): boolean => {
    return String ( value ).toUpperCase ( ) === "TRUE" || String ( value ).toUpperCase ( ) === "FALSE"
  }

  private isNumber = ( value: string ): boolean => {
    if ( value != null ) {
      return ( String ( value ).length == 1 || !String ( value ).startsWith ( "0" ) ) && !isNaN ( Number ( value ) ) && String ( value ) != ""
    }
    return false
  }

  private checkDate = ( value: string ): Date | string  => {
    const dangerous_format = [
      "yyyy-MM-dd",
      "dd/MM/yyyy"
    ]

    for ( const format of [
      "dd/MM/yyyy HH:mm",
      "E dd/MM/yyyy",
      "E dd/MM/yyyy HH:mm",
      "yyyy-MM-dd",
      "dd/MM/yyyy",
      "yyyy-MM-dd HH:mm:ss.SSSSSS"
    ] ) {
      try {
        const res = parse ( value, format, new Date ( ) )
        if ( ( dangerous_format.includes ( format ) && format.length === value.length ) && res.toString ( ) !== "Invalid Date" ) {
          return res
        }
      } catch {
        continue
      }
    }
    return value
  }

}