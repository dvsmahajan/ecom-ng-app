import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMainRoutingModule } from './home-main-routing.module';
import { HomeMainComponent } from './home-main.component';


@NgModule({
  declarations: [HomeMainComponent],
  imports: [
    CommonModule,
    HomeMainRoutingModule
  ]
})
export class HomeMainModule { }
