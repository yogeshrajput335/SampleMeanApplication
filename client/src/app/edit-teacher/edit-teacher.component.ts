import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-edit-teacher',
  template: `./edit-teacher.component.html`,
  
})
export class EditTeacherComponent implements OnInit {
  teacher: BehaviorSubject<Teacher> = new BehaviorSubject({});
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teacherService: TeacherService,
  ) { }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('No id provided');
    }
  
    this.teacherService.getteacher(id !).subscribe((teacher) => {
      this.teacher.next(teacher);
    });
  }
  
  editteacher(teacher: Teacher) {
    this.teacherService.updateteacher(this.teacher.value._id || '', teacher)
      .subscribe({
        next: () => {
          this.router.navigate(['/teachers']);
        },
        error: (error: any) => {
          alert('Failed to update teacher');
          console.error(error);
        }
      })
  }
 } {

}
