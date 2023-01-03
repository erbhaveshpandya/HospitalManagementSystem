import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingcomponentComponent } from '../bindingcomponent/bindingcomponent.component';
import { EventbindingComponentComponent } from '../eventbinding-component/eventbinding-component.component';
import { NgForComponentComponent } from '../ng-for-component/ng-for-component.component';
import { NgIfComponentComponent } from '../ng-if-component/ng-if-component.component';
import { HomeComponent } from './HomeApp.HomeComponent';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'bindingcomponent', component:BindingcomponentComponent},
  {path: 'EventbindingComponent', component:EventbindingComponentComponent},
  {path: 'NgIfComponent', component:NgIfComponentComponent},
  {path: 'NgForComponent', component:NgForComponentComponent},
  {path: 'Patient', loadChildren:()=> import('../PatientApp/PatientApp.module').then(m=>m.PatientModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeAppRouting { }
