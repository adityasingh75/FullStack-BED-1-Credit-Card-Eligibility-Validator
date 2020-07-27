import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { MainPageComponent } from './main-page/main-page.component';

import { Employee } from './Employee';
const appRoutes : Routes = [
  { 
    path: 'employees', 
    component: EmployeesListComponent 
  },
  {
    path: 'addemployee',
    component : AddEmployeeComponent
  }
];

@NgModule({
  imports : [ RouterModule.forRoot(appRoutes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule{}