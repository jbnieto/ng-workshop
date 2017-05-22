import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ExampleFormComponent } from './example-form/example-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/hello' },
  { path: 'hello', component: HelloWorldComponent },
  { path: 'form', component: ExampleFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HelloWorldComponent, ExampleFormComponent];