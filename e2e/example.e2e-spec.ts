import { browser, element, by } from 'protractor';
import 'jasmine';

describe('Base tests', function () {

  let starterdMsg = 'Hello Deloitte!';
  let afterClickMsg = 'You button-clicker!';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + starterdMsg, function () {
    expect(element(by.css('h1')).getText()).toContain(starterdMsg);
  });

  it('should have a button that when clicked, it will display: ' + afterClickMsg, function () {
    element(by.css('button')).click();
    expect(element(by.css('h1')).getText()).toContain(afterClickMsg);
    expect(element(by.css('h1')).getText()).not.toContain(starterdMsg);
  });

});