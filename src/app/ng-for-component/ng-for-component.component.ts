import { Component,OnInit } from '@angular/core';
import{BaseLogger} from '../Utility/CustomerApp.Logger'

@Component({
  selector: 'app-ng-for-component',
  templateUrl: './ng-for-component.component.html',
  styleUrls: ['./ng-for-component.component.css']
})
export class NgForComponentComponent implements OnInit {
  LogObj : BaseLogger = null;
  productList:Array<any>=[];
  constructor(_logger:BaseLogger) {
  this.LogObj = _logger;
   this.LogObj.Log();

   this.productList=[{ProductName:"Pen","ProductPrice":30,"ProductQuantity":50},
  {ProductName:"Pencil","ProductPrice":15,"ProductQuantity":25}]
  }
  ngOnInit(): void {
  }
  }
