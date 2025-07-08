import { ChangeDetectionStrategy, Component, inject } from "@angular/core"
import { FaIconComponent } from "@fortawesome/angular-fontawesome"
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap"
import { IconService } from "@app/services/icons.service"

@Component ( {
  selector: "app-angels-navbar",
  imports: [
    FaIconComponent,
    NgbCollapseModule
  ],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class NavbarComponent {
  public isNavCollapsed = true

  public iconSvc: IconService = inject ( IconService )

  public scrollto ( id: string ) {
    const element = document.getElementById ( id )
    if ( element ) {
      element.scrollIntoView ( { behavior: "smooth" } )
      if ( document.getElementsByClassName ( "navbar-toggler" ).length > 0 ) {
        if ( !document.getElementsByClassName ( "navbar-toggler" ) [ 0 ].classList.contains ( "collapsed" ) ) {
          ( document.getElementsByClassName ( "navbar-toggler" ) [ 0 ] as HTMLButtonElement ).click ( )
        }
      }
    }
  }
}
