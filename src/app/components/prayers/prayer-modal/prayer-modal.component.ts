import { ChangeDetectionStrategy, Component, Input } from "@angular/core"
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap"
import { Prayer } from "../prayers.component"

@Component ( {
  selector: "app-prayer-modal",
  imports: [],
  templateUrl: "./prayer-modal.component.html",
  styleUrl: "./prayer-modal.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class PrayerModalComponent {
  @Input ( ) public prayer: Prayer | undefined

  public constructor (
    private activeModal: NgbActiveModal
  ) { }

  public close ( ) {
    this.activeModal.close ( )
  }
}
