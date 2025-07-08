import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core"
import { FeastsComponent } from "@components/feasts/feasts.component"
import { PrayersComponent } from "@components/prayers/prayers.component"
import { AttributionComponent } from "@components/attribution/attribution.component"
import { ReflectionComponent } from "@components/reflection/reflection.component"
import { NavbarComponent } from "@consecrations/angels/components/navbar/navbar.component"
import { ApiService } from "@app/services/api.service"
import { HomeComponent } from "./components/home/home.component"
import { FaIconComponent } from "@fortawesome/angular-fontawesome"
import { Prayer, Feast, Video } from "@app/revive-consecrations.types"
import { IconService } from "@app/services/icons.service"

@Component ( {
  selector: "app-angels-home",
  imports: [
    NavbarComponent,
    HomeComponent,
    FeastsComponent,
    FaIconComponent,
    PrayersComponent,
    AttributionComponent,
    ReflectionComponent
  ],
  templateUrl: "./angels.component.html",
  styleUrl: "./angels.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AngelsHomeComponent {
  public prayers: Prayer [ ] = [ ]
  public feasts: Feast [ ] = [ ]
  public videos: Video [ ] = [ ]

  public readonly loading = signal ( true )
  public readonly error = signal ( false )

  public readonly iconSvc: IconService = inject ( IconService )
  private readonly apiSvc: ApiService = inject ( ApiService )

  public constructor ( ) {
    Promise.all ( [
      this.apiSvc.get ( "api/prayers/angelic" ),
      this.apiSvc.get ( "api/feasts/angelic" ),
      this.apiSvc.get ( "api/videos/angelic" )
    ] ).then ( ( [ prayers, feasts, videos ] ) => {
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
