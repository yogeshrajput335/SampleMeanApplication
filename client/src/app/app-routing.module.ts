import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import {EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'teachers', pathMatch: 'full' },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/new', component: AddEmployeeComponent }, 
  { path: 'employees/edit/:id', component: EditEmployeeComponent },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'teachers/new', component: AddTeacherComponent }, 
  { path: 'teachers/edit/:id', component: EditTeacherComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/new', component: AddClientComponent }, // <-- add this line
  { path: 'clients/edit/:id', component: EditClientComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
