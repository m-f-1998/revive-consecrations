import { ChangeDetectionStrategy, Component, Input } from "@angular/core"

@Component ( {
  selector: "app-feast-modal",
  standalone: true,
  imports: [],
  templateUrl: "./feast-modal.component.html",
  styleUrl: "./feast-modal.component.scss",
  changeDetection: ChangeDetectionStrategy.Default
} )
export class FeastModalComponent {
  @Input ( ) public feast: {
    name: string,
    date?: {
      day: number,
      month: number
    } | string,
    description: string,
    image?: string
  } | undefined

  public constructor ( ) { }

  public getMonthName ( month: number ): string {
    return new Intl.DateTimeFormat ( "en-US", { month: "long" } ).format (
      new Date ( 2024, month - 1, 1 )
    )
  }

  public getDate ( date: {
    day: number,
    month: number
  } | string ): string | null {
    if ( typeof date === "object" ) {
      return `${date.day} ${this.getMonthName ( date.month )}`
    } else {
      return null
    }
  }
}
