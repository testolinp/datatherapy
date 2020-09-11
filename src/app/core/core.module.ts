import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { HdComponent } from './hd/hd.component';
import { FtComponent } from './ft/ft.component';

@NgModule({
  exports: [ LayoutComponent, HdComponent, FtComponent],
  declarations: [ LayoutComponent, HdComponent, FtComponent],
  providers: []
})

export class CoreModule {};