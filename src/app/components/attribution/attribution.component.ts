import { ChangeDetectionStrategy, Component } from "@angular/core"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons"

@Component({
    selector: "app-attribution",
    imports: [
        FontAwesomeModule
    ],
    templateUrl: "./attribution.component.html",
    styleUrl: "./attribution.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AttributionComponent {
  public faGithub: any = faGithub
  public faLinkedin: any = faLinkedin
  public faEmail: any = faEnvelope
  public faWebsite: any = faGlobe

  public constructor ( ) { }

  public copyrightNotice ( ) {
    const year = new Date ( ).getFullYear ( )
    return `© ${year}. All rights reserved.`
  }

  public goToAuthor ( ) {
    window.open ( "https://matthewfrankland.co.uk", "_blank" )
  }
}
