import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeFormComponent,
    AddClientComponent,
    EditClientComponent,
    ClientFormComponent,
    ClientListComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    TeacherListComponent,
    TeacherFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
