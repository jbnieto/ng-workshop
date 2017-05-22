import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

import { ExampleFeatureModule } from './example-feature/example-feature.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ExampleFeatureModule
  ],
  declarations: [
    AppComponent,
    routedComponents
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
