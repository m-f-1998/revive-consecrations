import { ChangeDetectionStrategy, Component, Input } from "@angular/core"
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap"
import { Feast } from "../feasts.component"

@Component ( {
  selector: "app-feast-modal",
  imports: [ ],
  templateUrl: "./feast-modal.component.html",
  styleUrl: "./feast-modal.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class FeastModalComponent {
  @Input ( ) public feast: Feast | undefined

  public constructor (
    private activeModal: NgbActiveModal
  ) { }

  public getMonthName ( month: number ): string {
    return new Intl.DateTimeFormat ( "en-US", { month: "long" } ).format (
      new Date ( 2024, month, 1 )
    )
  }

  public getDate ( date: Date | null | undefined ): string | null {
    if ( date ) {
      return `${date.getDate ( )} ${this.getMonthName ( date.getMonth ( ) )}`
    }

    return ""
  }

  public close ( ) {
    this.activeModal.close ( )
  }
}
