import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, input, InputSignal, Signal, viewChild, viewChildren } from "@angular/core"
import Isotope from "isotope-layout"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { PrayerModalComponent } from "./prayer-modal/prayer-modal.component"
import { Prayer } from "@app/revive-consecrations.types"

@Component ( {
  selector: "app-prayers",
  imports: [],
  templateUrl: "./prayers.component.html",
  styleUrl: "./prayers.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class PrayersComponent implements AfterViewInit {
  public readonly isotopeContainer: Signal<ElementRef | undefined> = viewChild ( "isotopeContainer" )
  public readonly imageRefs: Signal<readonly ElementRef [ ]> = viewChildren ( "prayerImage" )

  private isotope!: Isotope
  public isTouchDevice: boolean = true

  public readonly prayers: InputSignal<Prayer [ ]> = input ( new Array<Prayer> ( ) )

  public currentFilter: string = "devotional"

  public constructor (
    public modalSvc: NgbModal
  ) { }

  public ngAfterViewInit ( ) {
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
      this.isotope = new Isotope ( this.isotopeContainer ()?.nativeElement, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry"
      } )
      this.filterItems ( "devotional" )
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
    const res = new Set<string> ( );
    ( this.prayers ( ) ?? [ ] ).forEach ( ( prayer: Prayer ) => res.add ( prayer.category ) )
    return [ ...res ]
  }

  public getCategoryTitle ( category: string ) {
    return category.split ( "_" ).map ( word => word.charAt ( 0 ).toUpperCase ( ) + word.slice ( 1 ) ).join ( " " )
  }

  public getPrayers ( category: string ) {
    return ( this.prayers ( ) ?? [ ] ).filter ( ( prayer: any ) => prayer.category === category )
  }

  public getShortDescription ( description: string ) {
    return description.length > 80 ? `${description.slice ( 0, 80 )}...` : description
  }

  public openPrayer ( prayer: Prayer ) {
    const modalRef = this.modalSvc.open ( PrayerModalComponent, {
      centered: true,
      size: "lg",
      scrollable: true,
      keyboard: false
    } )
    modalRef.componentInstance.prayer = prayer
  }
}
