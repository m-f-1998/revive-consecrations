import { Component } from "@angular/core"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { HomeComponent } from "./components/home/home.component"
import { FeastsComponent } from "./components/feasts/feasts.component"
import { PrayersComponent } from "./components/prayers/prayers.component"
import { AttributionComponent } from "./components/attribution/attribution.component"
import { ReflectionComponent } from "./components/reflection/reflection.component"
import { ConsecrationComponent } from "./components/consecration/consecration.component"

@Component ( {
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    FeastsComponent,
    PrayersComponent,
    AttributionComponent,
    ReflectionComponent,
    ConsecrationComponent
  ],
  styleUrl: "./app.component.scss"
} )
export class AppComponent {
  public title = "Our Lady"
}
