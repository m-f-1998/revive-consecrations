import { ChangeDetectionStrategy, Component, inject } from "@angular/core"
import { IconService } from "@app/services/icons.service"
import { FaIconComponent } from "@fortawesome/angular-fontawesome"

@Component ( {
  selector: "app-attribution",
  imports: [
    FaIconComponent
  ],
  templateUrl: "./attribution.component.html",
  styleUrl: "./attribution.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AttributionComponent {
  public readonly iconSvc: IconService = inject ( IconService )

  public copyrightNotice ( ) {
    const year = new Date ( ).getFullYear ( )
    return `© ${year}. All rights reserved.`
  }

  public goToAuthor ( ) {
    window.open ( "https://matthewfrankland.co.uk", "_blank" )
  }
}
