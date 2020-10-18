import { ExtraModalComponent } from './../common/extra-modal/extra-modal.component';
import { MobileMenuComponent } from './../common/mobile-menu/mobile-menu.component';
import { FooterComponent } from './../common/footer/footer.component';
import { HeaderComponent } from './../common/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,  
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    ExtraModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
