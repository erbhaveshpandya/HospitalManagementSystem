import { Component,Injector } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerApp.Logger';
@Component({
  templateUrl: './HomeApp.Home.html'
})
export class HomeComponent {
  LogObj : BaseLogger = null;
  constructor(_Injector:Injector) {
    this.LogObj = _Injector.get("1");
     this.LogObj.Log();
}
}