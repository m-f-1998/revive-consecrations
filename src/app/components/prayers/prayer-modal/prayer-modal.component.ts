import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core"
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap"
import { Prayer } from "@app/revive-consecrations.types"

@Component ( {
  selector: "app-prayer-modal",
  imports: [],
  templateUrl: "./prayer-modal.component.html",
  styleUrl: "./prayer-modal.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class PrayerModalComponent {
  public readonly prayer: InputSignal<Prayer | undefined> = input ( )

  public constructor (
    private activeModal: NgbActiveModal
  ) { }

  public close ( ) {
    this.activeModal.close ( )
  }
}
