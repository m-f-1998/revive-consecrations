import { ChangeDetectionStrategy, Component } from "@angular/core"
import { feasts, other_feasts } from "@consecrations/our-lady/data"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { FeastModalComponent } from "./feast-modal/feast-modal.component"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"

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
  public feasts = feasts
  public other_feasts = other_feasts

  public faInfo: any = faInfoCircle

  public constructor (
    public modalSvc: NgbModal
  ) { }

  public openEvent ( feast: {
    name: string,
    date: {
      day: number,
      month: number
    },
    description: string,
    image: string
  } | {
    name: string,
    date: string,
    description: string,
    image?: string
  } ) {
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

  public getDate ( date: {
    day: number,
    month: number
  } | string ): {
    day: number,
    month: number
  } | undefined {
    if ( typeof date === "object" ) {
      return date
    }
    return undefined
  }
}
