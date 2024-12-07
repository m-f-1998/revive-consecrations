import { Component } from "@angular/core"
import { faBars, faBoxesStacked, faBrain, faCalendar, faClose, faEnvelope, faGlobe, faHouse, faImage, faPrayingHands } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap"

@Component ( {
  selector: "app-navbar",
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgbCollapseModule
  ],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss"
} )
export class NavbarComponent {
  public faBars: any = faBars
  public faClose: any = faClose
  public items: {
    name: string,
    id: string,
    icon: any
  }[ ] = [
    {
      name: "Home",
      id: "home",
      icon: faHouse
    },
    {
      name: "Feasts",
      id: "feasts",
      icon: faCalendar
    },
    {
      name: "Prayers",
      id: "prayers",
      icon: faPrayingHands
    },
    {
      name: "Reflections",
      id: "reflection",
      icon: faBrain
    },
    {
      name: "Total Consecration",
      id: "consecration",
      icon: faGlobe
    }
  ]
  public isNavCollapsed = true

  public scrollto ( id: string ) {
    const element = document.getElementById ( id )
    if ( element ) {
      element.scrollIntoView ( { behavior: "smooth" } )
      if ( document.getElementsByClassName ( "navbar-toggler" ).length > 0 ) {
        if ( !document.getElementsByClassName ( "navbar-toggler" ) [ 0 ].classList.contains ( "collapsed" ) ) {
          (document.getElementsByClassName ( "navbar-toggler" ) [ 0 ] as HTMLButtonElement ).click ( )
        }
      }
    }
  }
}
