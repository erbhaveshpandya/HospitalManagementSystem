import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding-component',
  templateUrl: './eventbinding-component.component.html',
  styleUrls: ['./eventbinding-component.component.css']
})
export class EventbindingComponentComponent {
  showAlert()
  {
  alert("Show alert function is called");
  }
  
}
