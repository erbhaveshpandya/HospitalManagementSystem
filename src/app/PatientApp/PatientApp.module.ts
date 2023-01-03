import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientAppRoutingModule } from './PatientApp-routing.module';
import { PatientComponent } from './PatientApp.PatientComponent';

@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,       
    PatientAppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
