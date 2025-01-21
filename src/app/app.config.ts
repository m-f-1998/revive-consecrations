import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection } from "@angular/core"
import { provideRouter, withInMemoryScrolling } from "@angular/router"
import { routes } from "./app.routes"
import { IMAGE_CONFIG } from "@angular/common"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { provideHttpClient } from "@angular/common/http"

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true
      }
    },
    importProvidersFrom ( [
      NgbModule
    ] ),
    provideExperimentalZonelessChangeDetection ( ),
    provideRouter ( routes, withInMemoryScrolling ( {
      scrollPositionRestoration: "top"
    } ) ),
    provideHttpClient ( )
  ]
}