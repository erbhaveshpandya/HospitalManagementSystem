import { Component } from '@angular/core';

@Component({
  selector: 'app-bindingcomponent',
  templateUrl: './bindingcomponent.component.html',
  styleUrls: ['./bindingcomponent.component.css']
})
export class BindingcomponentComponent {
    value1:number=10;
    marks:Array<number>=[10,22,14];
    dob:Date=new Date();
    status:boolean=true;
    // constructor() { }
    // ngOnInit(): void {
    // }
    returnString()
    {
    return "Welcome to the application";
    }
}
