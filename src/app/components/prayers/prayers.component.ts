import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core"
import { prayers } from "@app/data"
import Isotope from "isotope-layout"
import imagesLoaded from "imagesloaded"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { PrayerModalComponent } from "./prayer-modal/prayer-modal.component"

@Component ( {
  selector: "app-prayers",
  standalone: true,
  imports: [],
  templateUrl: "./prayers.component.html",
  styleUrl: "./prayers.component.scss"
} )
export class PrayersComponent implements AfterViewInit {
  public prayers = prayers
  @ViewChild ( "isotopeContainer", { static: false } ) isotopeContainer!: ElementRef
  private isotope!: Isotope

  public currentFilter: string = "*"

  public constructor (
    public modalSvc: NgbModal
  ) { }

  public ngAfterViewInit ( ) {
    imagesLoaded ( this.isotopeContainer.nativeElement, () => {
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
