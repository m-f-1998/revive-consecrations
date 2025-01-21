import { Component, ElementRef, Signal, viewChild, viewChildren } from "@angular/core"
import { Router } from "@angular/router"
import Isotope from "isotope-layout"
import { faHandPointer, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"

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
      id: "our-lord",
      title: "Our Lord",
      description: "Consecrate yourself to the Our Blessed Lord.",
      image: "/assets/img/background/our-lord.jpg"
    },
    {
      id: "our-lady",
      title: "Our Lady",
      description: "Consecrate yourself to the Blessed Virgin Mary.",
      image: "/assets/img/background/our-lady.jpg"
    },
    {
      id: "martyrs",
      title: "The Martyrs",
      description: "Devotions to the Martyrs of the Faith.",
      image: "/assets/img/background/martyrs.jpg"
    },
    {
      id: "angels",
      title: "The Angels",
      description: "Devotions to the Angels.",
      image: "/assets/img/background/angels.jpg"
    }
  ]

  public readonly isotopeContainer: Signal<ElementRef | undefined> = viewChild ( "isotopeContainer" )
  public readonly imageRefs: Signal<readonly ElementRef[]> = viewChildren ( "prayerImage" )

  public faInfo: any = faInfoCircle
  public faCursor: any = faHandPointer

  public constructor (
    private router: Router
  ) { }

  public ngInit ( ) {
    const load = this.imageRefs ().map ( img =>
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
      new Isotope ( this.isotopeContainer ()?.nativeElement, {
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
