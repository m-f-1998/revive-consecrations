import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from "@angular/core"
import { provideRouter } from "@angular/router"
import { routes } from "./app.routes"
import { IMAGE_CONFIG } from "@angular/common"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"

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
    provideZoneChangeDetection ( { eventCoalescing: true } ),
    provideRouter ( routes )
  ]
}