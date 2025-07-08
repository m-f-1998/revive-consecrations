import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"
import Typed from "typed.js"
import { our_lord } from "@app/litanies"

@Component ( {
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class HomeComponent implements OnInit {
  public typed: Typed | undefined

  public ngOnInit ( ) {
    this.typed = new Typed ( "#typed", {
      strings: our_lord.items,
      typeSpeed: 60,
    } )
  }
}
