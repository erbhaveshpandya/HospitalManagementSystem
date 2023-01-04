import { Component } from '@angular/core';
import {Patient} from './PatientApp-model'

@Component({
  templateUrl: './PatientApp.Patient.html'
})
export class PatientComponent {
  title = 'HospitalManagementSystem';
  PatientObj:Patient = new Patient();

  haserror(typeofvalidator:string,controlname:string) : boolean
  {
    return this.PatientObj.formPatientGroup.controls[controlname].hasError(typeofvalidator);
  }

}