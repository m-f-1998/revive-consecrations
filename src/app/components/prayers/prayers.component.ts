import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChild, ViewChildren } from "@angular/core"
import { prayers } from "@app/data"
import Isotope from "isotope-layout"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { PrayerModalComponent } from "./prayer-modal/prayer-modal.component"

@Component ( {
    selector: "app-prayers",
    imports: [],
    templateUrl: "./prayers.component.html",
    styleUrl: "./prayers.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class PrayersComponent implements AfterViewInit {
  public prayers = prayers
  @ViewChild ( "isotopeContainer", { static: false } ) isotopeContainer!: ElementRef
  @ViewChildren ( "prayerImage" ) imageRefs!: QueryList <ElementRef>

  private isotope!: Isotope
  public isTouchDevice: boolean = true

  public currentFilter: string = "*"

  public constructor (
    public modalSvc: NgbModal
  ) { }

  public ngAfterViewInit ( ) {
    const load = this.imageRefs.toArray ( ).map ( img =>
      new Promise<void> ( ( resolve, reject ) => {
        const element = img.nativeElement as HTMLImageElement

        if ( element.complete ) {
          // Already loaded
          resolve ( )
        } else {
          // Wait for load event
          element.onload = ( ) => resolve ( )
          element.onerror = ( ) => reject ( `Failed to load image: ${element.src}` )
        }
      } )
    )
    Promise.all ( load ).then ( ( ) => {
      this.isotope = new Isotope ( this.isotopeContainer.nativeElement, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry"
      } )
    } )
  }

  public filterItems ( filter: string ) {
    this.currentFilter = filter
    this.isotope.arrange ( { filter: filter === "*" ? "*" : `.filter-${filter}` } )
  }

  public isFilterActive ( filter: string ) {
    return filter === this.currentFilter
  }

  public getCategories ( ) {
    return Object.keys ( this.prayers )
  }

  public getCategoryTitle ( category: string ) {
    return category.split ( "_" ).map ( word => word.charAt ( 0 ).toUpperCase ( ) + word.slice ( 1 ) ).join ( " " )
  }

  public getPrayers ( category: string ) {
    return this.prayers [ category ]
  }

  public getShortDescription ( description: string ) {
    return description.length > 80 ? `${description.slice ( 0, 80 )}...` : description
  }

  public openPrayer ( prayer: {
    id: string,
    name: string,
    description: string,
    text: string,
    image: string
  } ) {
    const modalRef = this.modalSvc.open ( PrayerModalComponent, {
      centered: true,
      size: "lg",
      scrollable: true,
      keyboard: false
    } )
    modalRef.componentInstance.prayer = prayer
  }
}
