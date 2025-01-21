import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { FeastModalComponent } from "./feast-modal/feast-modal.component"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"

export interface Feast {
  url: string
  name: string
  description: string
  dateDescription: string | null
  date: Date | null
}

@Component ( {
  selector: "app-feasts",
  imports: [
    FontAwesomeModule
  ],
  templateUrl: "./feasts.component.html",
  styleUrl: "./feasts.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class FeastsComponent {
  public readonly feasts: InputSignal<Feast []> = input ( new Array<Feast> ( ) )
  public faInfo = faInfoCircle

  public constructor (
    public modalSvc: NgbModal
  ) { }

  public openEvent ( feast: Feast ) {
    const modalRef = this.modalSvc.open ( FeastModalComponent, {
      centered: true,
      size: "lg",
      scrollable: true,
      keyboard: false
    } )
    modalRef.componentInstance.feast = feast
  }

  public getMonthName ( month: number ): string {
    return new Intl.DateTimeFormat ( "en-US", { month: "long" } ).format (
      new Date ( 2024, month - 1, 1 )
    )
  }

  public getDate ( date: Date | null ): {
    month: number
    day: number
  } | undefined {
    if ( date ) {
      return {
        month: date.getMonth ( ) + 1,
        day: date.getDate ( )
      }
    }
    return undefined
  }
}
