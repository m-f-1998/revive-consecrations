import { ChangeDetectionStrategy, Component, inject, input, InputSignal } from "@angular/core"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { FeastModalComponent } from "./feast-modal/feast-modal.component"
import { Feast } from "@app/revive-consecrations.types"

@Component ( {
  selector: "app-feasts",
  templateUrl: "./feasts.component.html",
  styleUrl: "./feasts.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class FeastsComponent {
  public readonly feasts: InputSignal<Feast []> = input ( new Array<Feast> ( ) )

  public readonly modalSvc: NgbModal = inject ( NgbModal )

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
