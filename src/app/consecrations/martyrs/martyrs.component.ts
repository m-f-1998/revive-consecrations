import { ChangeDetectionStrategy, Component, signal } from "@angular/core"
import { FeastsComponent } from "@components/feasts/feasts.component"
import { PrayersComponent } from "@components/prayers/prayers.component"
import { AttributionComponent } from "@components/attribution/attribution.component"
import { ReflectionComponent } from "@components/reflection/reflection.component"
import { NavbarComponent } from "@consecrations/martyrs/components/navbar/navbar.component"
import { ApiService } from "@app/services/api.service"
import { HomeComponent } from "./components/home/home.component"

@Component ( {
  selector: "app-martyrs-home",
  templateUrl: "./martyrs.component.html",
  imports: [
    NavbarComponent,
    HomeComponent,
    FeastsComponent,
    PrayersComponent,
    AttributionComponent,
    ReflectionComponent
  ],
  styleUrl: "./martyrs.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class MartyrsHomeComponent {
  public prayers: any = { }
  public feasts: any = { }
  public videos: any = { }

  public readonly loading = signal ( true )
  public readonly error = signal ( false )

  public constructor (
    private apiSvc: ApiService
  ) {
    this.apiSvc.getData ( "martyrs" ).then ( ( [ prayers, feasts, videos ] ) => {
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
