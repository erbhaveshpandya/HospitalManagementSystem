import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './HomeApp.HomeComponent';
import { MasterPageComponent } from './HomeApp.MasterPageComponent';

import { HomeAppRouting } from './HomeApp-routing.module';
import { NgIfComponentComponent } from '../ng-if-component/ng-if-component.component';
import { NgForComponentComponent } from '../ng-for-component/ng-for-component.component';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent,
    NgIfComponentComponent,
    NgForComponentComponent
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
