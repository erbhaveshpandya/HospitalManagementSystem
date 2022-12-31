import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './HomeApp.HomeComponent';
import { MasterPageComponent } from './HomeApp.MasterPageComponent';

import { HomeAppRouting } from './HomeApp-routing.module';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeAppRouting,
    FormsModule,       
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
