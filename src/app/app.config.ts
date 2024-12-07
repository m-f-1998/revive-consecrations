import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core"
import { provideRouter } from "@angular/router"
import { routes } from "./app.routes"
import { IMAGE_CONFIG } from "@angular/common"

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true
      }
    },
    provideZoneChangeDetection ( { eventCoalescing: true } ),
    provideRouter ( routes )
  ]
}