import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-form',
  templateUrl: `./teacher-form.component.html`,
})
export class TeacherFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Teacher> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<Teacher>();
  
  @Output()
  formSubmitted = new EventEmitter<Teacher>();
  
  teacherForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) { }
  
  get name() { return this.teacherForm.get('name')!; }
  get subject() { return this.teacherForm.get('subject')!; }
  get phonenumber() { return this.teacherForm.get('phonenumber')!; }
  
  ngOnInit() {
    this.initialState.subscribe(teacher => {
      this.teacherForm = this.fb.group({
        name: [ teacher.name, [Validators.required] ],
        subject: [ teacher.subject, [ Validators.required, Validators.minLength(5) ] ],
        phonenumber: [ teacher.phonenumber, [Validators.required] ]
      });
    });
  
    this.teacherForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }
  
  submitForm() {
    this.formSubmitted.emit(this.teacherForm.value);
  }
 }{

}
