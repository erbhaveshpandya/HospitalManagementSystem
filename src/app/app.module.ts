import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './app.HomeComponent';
import { MasterPageComponent } from './app.MasterPageComponent';
import { PatientComponent } from './app.PatientComponent';

@NgModule({
  declarations: [
    PatientComponent,
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,       
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
