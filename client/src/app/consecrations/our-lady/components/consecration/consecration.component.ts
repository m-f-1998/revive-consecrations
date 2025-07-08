import { DatePipe } from "@angular/common"
import { ChangeDetectionStrategy, Component, inject } from "@angular/core"
import { our_lady } from "@app/consecrations"
import { IconService } from "@app/services/icons.service"
import { FaIconComponent } from "@fortawesome/angular-fontawesome"

@Component ( {
  selector: "app-our-lady-consecration",
  imports: [
    FaIconComponent
  ],
  templateUrl: "./consecration.component.html",
  styleUrl: "./consecration.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class OurLadyConsecrationComponent {
  public consecration = our_lady

  public readonly iconSvc: IconService = inject ( IconService )

  public goToDay ( day: {
    title: string
    link: string
    date: Date
  } ) {
    window.open ( day.link, "_blank" )
  }

  public isConsecrationActive ( ) {
    const today = new Date ( )
    const datePipe = new DatePipe ( "en-US" )
    const todayString = datePipe.transform ( today, "yyyy-MM-dd" )
    return this.consecration.text.findIndex ( day => datePipe.transform ( day.date, "yyyy-MM-dd" ) === todayString )
  }

  public joinUs ( ) {
    window.open ( this.consecration.whatsapp, "_blank" )
  }

  public goToMore ( ) {
    window.open (
      "https://www.catholiccompany.com/how-to-make-your-st-louis-de-montforts-total-consecration-to-jesus-through-mary/",
      "_blank"
    )
  }
}
