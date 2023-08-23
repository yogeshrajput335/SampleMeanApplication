import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
})
export class AddTeacherComponent {
  constructor(
    private router: Router,
    private teacherService: TeacherService
  ) { }
  
  addteacher(teacher: Teacher) {
    this.teacherService.createteacher(teacher)
      .subscribe({
        next: () => {
          this.router.navigate(['/teachers']);
        },
        error: (error: any) => {
          alert("Failed to create teacher");
          console.error(error);
        }
      });
  }

}
