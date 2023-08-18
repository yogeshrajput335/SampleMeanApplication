import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
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
  { path: 'teachers/edit/:id', component: EditTeacherComponent }]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
