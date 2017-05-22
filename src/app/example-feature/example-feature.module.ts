import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleFeatureRoutingModule, routedComponents } from './example-feature-routing.module';

@NgModule({
  imports: [
    ExampleFeatureRoutingModule, 
    CommonModule
  ],
  declarations: [routedComponents],
})
export class ExampleFeatureModule { }
