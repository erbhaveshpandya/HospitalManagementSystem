import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';

export class Patient
{
    name:string="";
    age:number=0;
    amount:number=0;
    problem="";
    formPatientGroup:FormGroup = null;
    constructor(){
        var _builder = new FormBuilder();
        this.formPatientGroup = _builder.group({});
        this.formPatientGroup.addControl("PatientNameControl",new FormControl('',Validators.required))
        this.formPatientGroup.addControl("ProblemControl",new FormControl('',Validators.required))
    }
}