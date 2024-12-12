import { Component } from "@angular/core"
import { HomeComponent } from "@components/home/home.component"
import { FeastsComponent } from "@components/feasts/feasts.component"
import { PrayersComponent } from "@components/prayers/prayers.component"
import { AttributionComponent } from "@components/attribution/attribution.component"
import { ReflectionComponent } from "@components/reflection/reflection.component"
import { ConsecrationComponent } from "@consecrations/our-lady/components/consecration/consecration.component"
import { NavbarComponent } from "@consecrations/our-lady/components/navbar/navbar.component"

@Component ( {
  selector: "our-lady-consecration",
  templateUrl: "./home.component.html",
  imports: [
    NavbarComponent,
    HomeComponent,
    FeastsComponent,
    PrayersComponent,
    AttributionComponent,
    ReflectionComponent,
    ConsecrationComponent
  ],
  styleUrl: "./home.component.scss"
} )
export class OurLadyConsecration { }
