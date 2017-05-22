import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public greeting = 'Hello Deloitte!';

  changeGreeting() {
    this.greeting = 'You button-clicker!';
  }
}
