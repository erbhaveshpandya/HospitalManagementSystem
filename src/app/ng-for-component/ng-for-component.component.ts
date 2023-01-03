import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-component',
  templateUrl: './ng-for-component.component.html',
  styleUrls: ['./ng-for-component.component.css']
})
export class NgForComponentComponent implements OnInit {
  productList:Array<any>=[];
  constructor() {
  this.productList=[{ProductName:"Pen","ProductPrice":30,"ProductQuantity":50},
  {ProductName:"Pencil","ProductPrice":15,"ProductQuantity":25}]
  }
  ngOnInit(): void {
  }
  }
