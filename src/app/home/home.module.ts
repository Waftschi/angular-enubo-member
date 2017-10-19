import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HomeButtonComponent, TestComponent]
})
export class HomeModule { }
