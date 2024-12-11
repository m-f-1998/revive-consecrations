import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, signal } from "@angular/core"
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { YouTubePlayer } from "@angular/youtube-player"
import { videos } from "@app/data";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

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

  public videos = videos
  public selected = 0

  public windowWidth = signal ( window.innerWidth )

  public videoWidth = computed ( ( ) =>
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
