import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.less']
})
export class ExampleFormComponent implements OnInit {
  public exampleForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    // Always use form builder, the syntax is cleaner than using FormGroup and instantiating all the FormControls
    this.exampleForm = this._fb.group({
      firstName: ['', Validators.required],
      middleName: '', //No need for an array when no validators are used
      lastName: ['', Validators.required]
    });
  }

  resetForm() {
    this.exampleForm.setValue({
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }
}