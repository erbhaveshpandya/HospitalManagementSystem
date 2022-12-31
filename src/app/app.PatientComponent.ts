import { Component } from '@angular/core';
import {Patient} from './app-model'

@Component({
  templateUrl: './app.PatientComponent.html',
  styleUrls: ['./app.component.css']
})
export class PatientComponent {
  title = 'HospitalManagementSystem';
  PatientObj:Patient = new Patient();
}
