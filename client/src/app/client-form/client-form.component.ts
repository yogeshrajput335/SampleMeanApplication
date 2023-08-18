import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Client } from '../client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styles: [
    `.client-form {
      max-width: 560px;
      margin-left: auto;
      margin-right: auto;
    }`
  ]
})
export class ClientFormComponent {
  @Input()
  initialState: BehaviorSubject<Client> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<Client>();
  
  @Output()
  formSubmitted = new EventEmitter<Client>();
  
  clientForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) { }
  
  get name() { return this.clientForm.get('name')!; }
  get location() { return this.clientForm.get('location')!; }
  get technology() { return this.clientForm.get('technology')!; }
  
  ngOnInit() {
    this.initialState.subscribe(client => {
      this.clientForm = this.fb.group({
        name: [ client.name, [Validators.required] ],
        location: [ client.location, [ Validators.required, Validators.minLength(5) ] ],
        technology: [ client.technology, [Validators.required] ]
      });
    });
  
    this.clientForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }
  
  submitForm() {
    this.formSubmitted.emit(this.clientForm.value);
  }

}
