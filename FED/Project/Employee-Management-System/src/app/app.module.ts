import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { MainPageComponent } from './main-page/main-page.component';

import { Employee } from './Employee';
import { SearchByNamePipe } from './search-by-name.pipe';
import { AppRoutingModule } from './app.routing';
import { SearchByNamePipe } from './search-by-name.pipe';

@NgModule({
  imports:      [ BrowserModule, 
   RouterModule.forRoot([
      {path:'employees',component:EmployeesListComponent},
      {path:'addemployee',component:AddEmployeeComponent},
      {path:'editEmployee/:id',component:EmployeeEditComponent},
      {path:'details/:id',component:EmployeeDetailsComponent},
      {path:'deleteEmployee/:id',component:EmployeeDeleteComponent},
      {path:'**',component:MainPageComponent}
      ]),
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) ],
  
  declarations: [ AppComponent,           AddEmployeeComponent, 
  EmployeeDeleteComponent, EmployeeDetailsComponent,
  EmployeeEditComponent, 
  EmployeesListComponent, 
  MainPageComponent,
  SearchByNamePipe ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
