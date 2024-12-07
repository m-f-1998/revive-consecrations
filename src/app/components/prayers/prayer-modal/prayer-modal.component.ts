import { ChangeDetectionStrategy, Component, Input } from "@angular/core"

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

  public constructor ( ) { }
}
