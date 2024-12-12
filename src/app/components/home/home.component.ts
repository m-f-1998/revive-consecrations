import { ChangeDetectionStrategy, Component } from "@angular/core"
import Typed from "typed.js"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { litany } from "@app/consecrations/our-lady/data"

@Component ( {
    selector: "app-home",
    imports: [
        FontAwesomeModule
    ],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class HomeComponent {
  public typed: Typed | undefined

  public ngOnInit ( ) {
    this.typed = new Typed ( "#typed", {
      strings: litany,
      typeSpeed: 60,
    } )
  }
}
