import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from "@angular/core"
import { Router } from "@angular/router"
import Isotope from "isotope-layout"
import { faHandPointer, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component ( {
  selector: "app-home",
  templateUrl: "./home.component.html",
  imports: [
    FontAwesomeModule
  ],
  styleUrl: "./home.component.scss"
} )
export class HomeComponent {
  public consecrations = [
    {
      id: "our-lady",
      title: "Our Lady",
      description: "Consecrate yourself to the Blessed Virgin Mary.",
      image: "/assets/img/home-bg.jpg"
    }
  ]

  private isotope!: Isotope
  @ViewChild ( "isotopeContainer", { static: false } ) isotopeContainer!: ElementRef
  @ViewChildren ( "prayerImage" ) imageRefs!: QueryList <ElementRef>

  public faInfo: any = faInfoCircle
  public faCursor: any = faHandPointer

  public constructor (
    private router: Router
  ) { }

  public ngInit ( ) {
    const load = this.imageRefs.toArray ( ).map ( img =>
      new Promise<void> ( ( resolve, reject ) => {
        const element = img.nativeElement as HTMLImageElement

        if ( element.complete ) {
          resolve ( )
        } else {
          element.onload = ( ) => resolve ( )
          element.onerror = ( ) => reject ( `Failed to load image: ${element.src}` )
        }
      } )
    )
    Promise.all ( load ).then ( ( ) => {
      this.isotope = new Isotope ( this.isotopeContainer.nativeElement, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
      } )
    } )
  }

  public getShortDescription ( description: string ) {
    return description.length > 80 ? `${description.slice ( 0, 80 )}...` : description
  }

  public openConsecration ( id: string ) {
    this.router.navigate ( [ id ] )
  }
}
