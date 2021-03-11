import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes : Routes = [
   {
    path: 'home',
    component: HomeComponent,
   },
   {
    path: 'employee-list',
    component:EmployeeListComponent,
   },
 ]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class MyAppRoutingModule { }
