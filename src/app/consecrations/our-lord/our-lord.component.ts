import { ChangeDetectionStrategy, Component, signal } from "@angular/core"
import { FeastsComponent } from "@components/feasts/feasts.component"
import { PrayersComponent } from "@components/prayers/prayers.component"
import { AttributionComponent } from "@components/attribution/attribution.component"
import { ReflectionComponent } from "@components/reflection/reflection.component"
import { NavbarComponent } from "@consecrations/our-lord/components/navbar/navbar.component"
import { ApiService } from "@app/services/api.service"
import { HomeComponent } from "./components/home/home.component"

@Component ( {
  selector: "app-our-lord-home",
  templateUrl: "./our-lord.component.html",
  imports: [
    NavbarComponent,
    HomeComponent,
    FeastsComponent,
    PrayersComponent,
    AttributionComponent,
    ReflectionComponent
  ],
  styleUrl: "./our-lord.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class OurLordHomeComponent {
  public prayers: any = { }
  public feasts: any = { }
  public videos: any = { }

  public readonly loading = signal ( true )
  public readonly error = signal ( false )

  public constructor (
    private apiSvc: ApiService
  ) {
    this.apiSvc.getData ( "our-lord" ).then ( ( [ prayers, feasts, videos ] ) => {
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
