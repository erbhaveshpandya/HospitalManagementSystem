import { Component } from '@angular/core';
import {Patient} from './app-model'

@Component({
  templateUrl: './PatientApp.Patient.html'
})
export class PatientComponent {
  title = 'HospitalManagementSystem';
  PatientObj:Patient = new Patient();
}
