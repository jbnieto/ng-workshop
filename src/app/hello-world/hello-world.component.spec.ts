import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HelloWorldComponent } from './hello-world.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
     declarations: [HelloWorldComponent]
    });
  });
  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it ('should create the component', () => {
    //We can create components.
    let fixture = TestBed.createComponent(HelloWorldComponent);
    //And do any asserts we want.
    expect(fixture.componentInstance instanceof HelloWorldComponent).toBe(true, 'should create HelloWorldComponent');
  });

  it ('should update the view', () => {
    let fixture = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    
    expect(fixture.nativeElement.textContent).toContain('Hello World! from a component.');

    fixture.componentInstance.prop = 'New value'
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('New value');
  });
  
});
