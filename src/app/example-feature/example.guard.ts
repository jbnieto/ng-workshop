import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';

@Injectable()
export class ExampleGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor() {}
    //Dummy example. You can run whatever tests you need on the different tests and return accordingly
    canActivate(): boolean {
      return true;
    }
    canActivateChild(): boolean {
      return true;
    }
    canLoad(): boolean {
      return true;
    }
}