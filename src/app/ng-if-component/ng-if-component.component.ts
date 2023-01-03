import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  templateUrl: './ng-if-component.component.html',
  styleUrls: ['./ng-if-component.component.css']
})
export class NgIfComponentComponent implements OnInit {
show:boolean=true;
constructor() { }
ngOnInit(): void
{
}
showorhide()
{
if(this.show==true)
this.show=false;
else
this.show=true;
}
}

