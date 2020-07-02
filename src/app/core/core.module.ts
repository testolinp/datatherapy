import { NgModule } from '@angular/core';

import { HdComponent } from './hd/hd.component';
import { FtComponent } from './ft/ft.component';

@NgModule({
  imports: [],
  exports: [ HdComponent, FtComponent],
  declarations: [ HdComponent, FtComponent],
  providers: []
})

export class CoreModule {};