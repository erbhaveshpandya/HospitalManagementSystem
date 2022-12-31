import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app.HomeComponent';
import { PatientComponent } from './app.PatientComponent';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'Add', component:PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
