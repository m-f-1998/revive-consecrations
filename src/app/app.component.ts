import { ChangeDetectionStrategy, Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"

@Component ( {
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [
    RouterOutlet
  ],
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AppComponent { }
