import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { ExampleFormComponent } from './example-form.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ExampleFormComponent]
    });
  });
  beforeEach(async(() => {
    //We compile the components with TestBed
    TestBed.compileComponents();
  }));

  it ('should create the component', () => {
    //We can create components.
    let fixture = TestBed.createComponent(ExampleFormComponent);
    //And do any asserts we want.
    expect(fixture.componentInstance instanceof ExampleFormComponent).toBe(true, 'should create ExampleFormComponent');
  });
  
});
