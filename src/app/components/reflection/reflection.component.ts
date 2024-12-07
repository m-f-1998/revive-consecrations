import { ChangeDetectorRef, Component } from "@angular/core"
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { YouTubePlayer } from "@angular/youtube-player"
import { videos } from "@app/data";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component ( {
  selector: "app-reflection",
  standalone: true,
  imports: [
    YouTubePlayer,
    NgbModule
  ],
  templateUrl: "./reflection.component.html",
  styleUrl: "./reflection.component.scss"
} )
export class ReflectionComponent {

  public videos = videos
  public selected = 0

  public constructor (
    public sanitizer: DomSanitizer,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  public updateVideo ( index: number ) {
    this.selected = index
    this.changeDetectorRef.detectChanges ( )
  }

  public transform ( value: string ): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl ( value )
  }

  public calculateVideoWidth ( ) {
    return window.innerWidth > 768 ? 640 : window.innerWidth - 24
  }

}
