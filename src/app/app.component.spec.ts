import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
     imports: [
       BrowserModule,
       HttpModule
     ],
     declarations: [AppComponent],
     schemas: [NO_ERRORS_SCHEMA]
    });
  });
  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it ('should create the component', () => {
    //We can create components.
    let fixture = TestBed.createComponent(AppComponent);
    //And do any asserts we want.
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it ('should listen to events', () => {
    let fixture = TestBed.createComponent(AppComponent);
    //We get the debug element.
    fixture.debugElement.query(By.css('button'))
      //You can pass a parameter to the handler. Event can be custom event.
      .triggerEventHandler('click', undefined);
    //We trigger change detection to let Angular know about the change.
    fixture.detectChanges();

    expect(fixture.componentInstance.greeting).toBe('You button-clicker!');
  });

  it ('should update the view', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    expect(fixture.nativeElement.textContent).toContain('Hello Deloitte!');
    //We trigger change detection to let Angular know about the change.
    fixture.componentInstance.greeting = 'New value'
    fixture.detectChanges();

    expect(fixture.componentInstance.greeting).toBe('New value');
  });
  
});
