import { DatePipe } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"
import { consecration } from "@app/data"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCalendar, faCalendarDay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

@Component ( {
    selector: "app-consecration",
    imports: [
        FontAwesomeModule
    ],
    templateUrl: "./consecration.component.html",
    styleUrl: "./consecration.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ConsecrationComponent {
  public faCalendar: any = faCalendar
  public faCalendarDay: any = faCalendarDay
  public faWhatsApp: any = faWhatsapp
  public faInfo: any = faInfoCircle
  public consecration = consecration

  public constructor (
  ) { }

  public goToDay ( day: {
    title: string;
    link: string;
    date: Date;
  } ) {
    window.location.href = day.link
  }

  public isConsecrationActive ( ) {
    const today = new Date ( )
    const datePipe = new DatePipe ( "en-US" )
    const todayString = datePipe.transform ( today, "yyyy-MM-dd" )
    return this.consecration.findIndex ( day => datePipe.transform ( day.date, "yyyy-MM-dd" ) === todayString )
  }

  public joinUs ( ) {
    // TODO: Implement WhatsApp link
    alert ( "Join us on WhatsApp" )
  }

  public goToMore ( ) {
    window.location.href = "https://www.catholiccompany.com/how-to-make-your-st-louis-de-montforts-total-consecration-to-jesus-through-mary/?srsltid=AfmBOoofnNaBCW3jVa4FUUKd-VFgEXi2XSgHJVrhvh4UikJZSFJv99gJ"
  }
}
