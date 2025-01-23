import { DatePipe } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCalendar, faCalendarDay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { our_lady } from "@app/consecrations"

@Component ( {
  selector: "app-our-lady-consecration",
  imports: [
    FontAwesomeModule
  ],
  templateUrl: "./consecration.component.html",
  styleUrl: "./consecration.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class OurLadyConsecrationComponent {
  public faCalendar: any = faCalendar
  public faCalendarDay: any = faCalendarDay
  public faWhatsApp: any = faWhatsapp
  public faInfo: any = faInfoCircle
  public consecration = our_lady

  public constructor ( ) { }

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
