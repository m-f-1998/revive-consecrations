import { Routes } from "@angular/router"
import { OurLadyConsecration } from "@app/consecrations/our-lady/home.component"
import { HomeComponent } from "./home/home.component"
import { ErrorComponent } from "./error/error.component"

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "our-lady",
    component: OurLadyConsecration
  },
  { path: "error", component: ErrorComponent },
  { path: "error/:code", component: ErrorComponent },
  { path: "**", redirectTo: "/error/404" }
]
