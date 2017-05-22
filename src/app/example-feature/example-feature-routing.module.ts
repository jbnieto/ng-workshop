import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleFeatureComponent } from './example-feature.component';
import { FirstChildComponent } from './feature-childs/first-child.component';
import { TopAlbumsComponent } from './feature-childs/top-albums.component';

import { ExampleGuard } from './example.guard';
import { LastFMResolver } from './lastfm.resolver';

const routes: Routes = [
  { path: 'feature', component: ExampleFeatureComponent,
    canActivate: [ExampleGuard],
    canActivateChild: [ExampleGuard],
    children: [
      { 
        path: 'first-child', component: FirstChildComponent, 
        canLoad: [ExampleGuard]
      },
      {
        path: 'second-child', component: TopAlbumsComponent, 
        resolve: { topAlbums: LastFMResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LastFMResolver, ExampleGuard]
})
export class ExampleFeatureRoutingModule { }

export const routedComponents = [ExampleFeatureComponent, FirstChildComponent, TopAlbumsComponent];