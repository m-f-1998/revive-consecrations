import { ChangeDetectionStrategy, Component, signal } from "@angular/core"
import { FeastsComponent } from "@components/feasts/feasts.component"
import { PrayersComponent } from "@components/prayers/prayers.component"
import { AttributionComponent } from "@components/attribution/attribution.component"
import { ReflectionComponent } from "@components/reflection/reflection.component"
import { NavbarComponent } from "@consecrations/angels/components/navbar/navbar.component"
import { ApiService } from "@app/services/api.service"
import { HomeComponent } from "./components/home/home.component"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FaIconComponent } from "@fortawesome/angular-fontawesome"
import { Prayer, Feast, Video } from "@app/revive-consecrations.types"

@Component ( {
  selector: "app-angels-home",
  templateUrl: "./angels.component.html",
  imports: [
    NavbarComponent,
    HomeComponent,
    FeastsComponent,
    FaIconComponent,
    PrayersComponent,
    AttributionComponent,
    ReflectionComponent
  ],
  styleUrl: "./angels.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AngelsHomeComponent {
  public prayers: Prayer [ ] = [ ]
  public feasts: Feast [ ] = [ ]
  public videos: Video [ ] = [ ]

  public faSpinner = faSpinner

  public readonly loading = signal ( true )
  public readonly error = signal ( false )

  public constructor (
    private apiSvc: ApiService
  ) {
    this.apiSvc.getData ( "angelic" ).then ( ( [ prayers, feasts, videos ] ) => {
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
