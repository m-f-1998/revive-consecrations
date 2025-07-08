import { Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { ErrorComponent } from "./error/error.component"
import { OurLadyHomeComponent } from "./consecrations/our-lady/our-lady.component"
import { OurLordHomeComponent } from "./consecrations/our-lord/our-lord.component"
import { AngelsHomeComponent } from "./consecrations/angels/angels.component"
import { MartyrsHomeComponent } from "./consecrations/martyrs/martyrs.component"

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "our-lady",
    component: OurLadyHomeComponent
  },
  {
    path: "our-lord",
    component: OurLordHomeComponent
  },
  {
    path: "angels",
    component: AngelsHomeComponent
  },
  {
    path: "martyrs",
    component: MartyrsHomeComponent
  },
  { path: "error", component: ErrorComponent },
  { path: "error/:code", component: ErrorComponent },
  { path: "**", redirectTo: "/error/404" }
]
