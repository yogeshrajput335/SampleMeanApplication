import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl:  './teacher-list.component.html',
})
export class TeacherListComponent  implements OnInit {
  teachers$: Observable<Teacher[]> = new Observable();
  
  constructor(private teachersService: TeacherService) { }
  
  ngOnInit(): void {
    this.fetchteachers();
  }
  
  deleteteacher(id: string): void {
    this.teachersService.deleteteacher(id).subscribe({
      next: () => this.fetchteachers()
    });
  }
  
  private fetchteachers(): void {
    this.teachers$ = this.teachersService.getteachers();
  }
 } {

}
