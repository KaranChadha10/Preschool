import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LeftmenuComponent } from './components/leftmenu/leftmenu.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LeftmenuComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[
    HeaderComponent,
    LeftmenuComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
