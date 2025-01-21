import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, input, InputSignal, signal } from "@angular/core"
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"
import { YouTubePlayer } from "@angular/youtube-player"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"

export interface ReflectionVideo {
  title: string
  slug: string
}

@Component ( {
  selector: "app-reflection",
  imports: [
    YouTubePlayer,
    NgbModule
  ],
  templateUrl: "./reflection.component.html",
  styleUrl: "./reflection.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ReflectionComponent {

  public selected = 0

  public readonly windowWidth = signal ( window.innerWidth )

  public readonly videos: InputSignal<ReflectionVideo [ ] | undefined> = input ( )

  public readonly videoWidth = computed ( ( ) =>
    this.windowWidth ( ) > 768 ? 640 : this.windowWidth ( ) - 24
  )

  public constructor (
    public sanitizer: DomSanitizer,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    effect ( ( ) => {
      const resizeHandler = ( ) => this.windowWidth.set ( window.innerWidth )
      window.addEventListener ( "resize", resizeHandler )

      return ( ) => window.removeEventListener ( "resize", resizeHandler )
    } )
  }

  public updateVideo ( index: number ) {
    this.selected = index
    this.changeDetectorRef.detectChanges ( )
  }

  public transform ( value: string ): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl ( value )
  }

}
