import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core"
import { FeastsComponent } from "@components/feasts/feasts.component"
import { PrayersComponent } from "@components/prayers/prayers.component"
import { AttributionComponent } from "@components/attribution/attribution.component"
import { ReflectionComponent } from "@components/reflection/reflection.component"
import { OurLadyConsecrationComponent } from "@consecrations/our-lady/components/consecration/consecration.component"
import { NavbarComponent } from "@consecrations/our-lady/components/navbar/navbar.component"
import { ApiService } from "@app/services/api.service"
import { HomeComponent } from "./components/home/home.component"
import { FaIconComponent } from "@fortawesome/angular-fontawesome"
import { Prayer, Feast, Video } from "@app/revive-consecrations.types"
import { IconService } from "@app/services/icons.service"

@Component ( {
  selector: "app-our-lady-home",
  imports: [
    NavbarComponent,
    HomeComponent,
    FeastsComponent,
    FaIconComponent,
    PrayersComponent,
    AttributionComponent,
    ReflectionComponent,
    OurLadyConsecrationComponent
  ],
  templateUrl: "./our-lady.component.html",
  styleUrl: "./our-lady.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class OurLadyHomeComponent {
  public prayers: Prayer [ ] = [ ]
  public feasts: Feast [ ] = [ ]
  public videos: Video [ ] = [ ]

  public readonly loading = signal ( true )
  public readonly error = signal ( false )

  public readonly iconSvc: IconService = inject ( IconService )
  private readonly apiSvc: ApiService = inject ( ApiService )

  public constructor ( ) {
    Promise.all ( [
      this.apiSvc.get ( "api/prayers/our-lady" ),
      this.apiSvc.get ( "api/feasts/our-lady" ),
      this.apiSvc.get ( "api/videos/our-lady" )
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
