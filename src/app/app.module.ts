import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerospaceComponent } from './sections/home/herospace/herospace.component';
import { HomeViewComponent } from './sections/home/home.component';
import { ServicesViewComponent } from './sections/services/services.component';
import { PublishViewComponent } from './sections/publish/publish.component';

import { LayoutComponent } from './core/layout/layout.component';
import { HdComponent } from './core/hd/hd.component';
import { FtComponent } from './core/ft/ft.component';

import { AboutComponent } from './sections/home/about/about.component';
import { TeamComponent } from './sections/home/team/team.component';
import { ServicesComponent } from './sections/home/services/services.component';
import { PublishComponent } from './sections/home/publish/publish.component';
import { ToogleComponent } from './sections/services/components/toogle/toogle.component';

import { HomepageService } from './homepage.service';
import { InicioComponent } from './sections/inicio/inicio.component';
import { PublicacionesComponent } from './sections/publicaciones/publicaciones.component';
import { ServiciosComponent } from './sections/servicios/servicios.component';
import { DashTitlePipe } from './dash-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HdComponent,
    FtComponent,
    HerospaceComponent,
    HomeViewComponent,
    ServicesViewComponent,
    PublishViewComponent,
    AboutComponent,
    TeamComponent,
    ServicesComponent,
    PublishComponent,
    ToogleComponent,
    InicioComponent,
    PublicacionesComponent,
    ServiciosComponent,
    DashTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [HomepageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
