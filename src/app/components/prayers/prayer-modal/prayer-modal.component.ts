import { ChangeDetectionStrategy, Component, Input } from "@angular/core"
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap"

@Component ( {
  selector: "app-prayer-modal",
  standalone: true,
  imports: [],
  templateUrl: "./prayer-modal.component.html",
  styleUrl: "./prayer-modal.component.scss",
  changeDetection: ChangeDetectionStrategy.Default
} )
export class PrayerModalComponent {
  @Input ( ) public prayer: {
    id: string,
    name: string,
    description: string,
    text: string,
    image: string
  } | undefined

  public constructor (
    private activeModal: NgbActiveModal
  ) { }

  public close ( ) {
    this.activeModal.close ( )
  }
}
