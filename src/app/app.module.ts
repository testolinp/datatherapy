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

import { CoreModule } from './core/core.module';
import { AboutComponent } from './sections/home/about/about.component';
import { TeamComponent } from './sections/home/team/team.component';
import { ServicesComponent } from './sections/home/services/services.component';
import { PublishComponent } from './sections/home/publish/publish.component';
import { ToogleComponent } from './sections/services/components/toogle/toogle.component';

@NgModule({
  declarations: [
    AppComponent,
    HerospaceComponent,
    HomeViewComponent,
    ServicesViewComponent,
    PublishViewComponent,
    AboutComponent,
    TeamComponent,
    ServicesComponent,
    PublishComponent,
    ToogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
