import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './HomeApp.HomeComponent';
import { MasterPageComponent } from './HomeApp.MasterPageComponent';

import { HomeAppRouting } from './HomeApp-routing.module';
import { NgIfComponentComponent } from '../ng-if-component/ng-if-component.component';
import { NgForComponentComponent } from '../ng-for-component/ng-for-component.component';
import { BaseLogger, ConsoleLogger, DBLogger } from '../Utility/CustomerApp.Logger';

var providercollection:any = [];
providercollection.push({provide:"1",useClass:DBLogger});
providercollection.push({provide:"2",useClass:ConsoleLogger});
providercollection.push({provide:BaseLogger,useClass:ConsoleLogger});

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
  providers: [providercollection],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
