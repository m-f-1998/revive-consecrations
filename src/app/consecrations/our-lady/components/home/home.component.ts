import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"
import Typed from "typed.js"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { our_lady } from "@app/litanies"

@Component ( {
  selector: "app-home",
  imports: [
    FontAwesomeModule
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class HomeComponent implements OnInit {
  public typed: Typed | undefined

  public ngOnInit ( ) {
    this.typed = new Typed ( "#typed", {
      strings: our_lady.items,
      typeSpeed: 60,
    } )
  }
}
