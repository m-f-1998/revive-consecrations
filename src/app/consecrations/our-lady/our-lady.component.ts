import { ChangeDetectionStrategy, Component, signal } from "@angular/core"
import { FeastsComponent } from "@components/feasts/feasts.component"
import { PrayersComponent } from "@components/prayers/prayers.component"
import { AttributionComponent } from "@components/attribution/attribution.component"
import { ReflectionComponent } from "@components/reflection/reflection.component"
import { OurLadyConsecrationComponent } from "@consecrations/our-lady/components/consecration/consecration.component"
import { NavbarComponent } from "@consecrations/our-lady/components/navbar/navbar.component"
import { ApiService } from "@app/services/api.service"
import { HomeComponent } from "./components/home/home.component"

@Component ( {
  selector: "app-our-lady-home",
  templateUrl: "./our-lady.component.html",
  imports: [
    NavbarComponent,
    HomeComponent,
    FeastsComponent,
    PrayersComponent,
    AttributionComponent,
    ReflectionComponent,
    OurLadyConsecrationComponent
  ],
  styleUrl: "./our-lady.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class OurLadyHomeComponent {
  public prayers: any = { }
  public feasts: any = { }
  public videos: any = { }

  public readonly loading = signal ( true )
  public readonly error = signal ( false )

  public constructor (
    private apiSvc: ApiService
  ) {
    this.apiSvc.getData ( "our-lady" ).then ( ( [ prayers, feasts, videos ] ) => {
      this.prayers = prayers
      this.feasts = feasts
      this.videos = videos
    } ).catch ( error => {
      this.error.set ( true )
      console.error ( error )
    } ).finally ( ( ) => {
      this.loading.set ( false )
    } )
  }
}
