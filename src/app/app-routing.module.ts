import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeViewComponent } from "./sections/home/home.component";
import { InicioComponent } from "./sections/inicio/inicio.component";
import { ServicesViewComponent } from "./sections/services/services.component";
import { PublishViewComponent } from "./sections/publish/publish.component";

const routes: Routes = [
  { path: "", component: HomeViewComponent },
  { path: "servicios/:slug", component: ServicesViewComponent },
  { path: "publicaciones", component: PublishViewComponent },
  { path: "es", component: InicioComponent },
  { path: "**", component: HomeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
