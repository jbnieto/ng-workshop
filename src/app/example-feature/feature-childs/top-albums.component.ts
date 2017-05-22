import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'top-albums',
  templateUrl: './top-albums.component.html'
})
export class TopAlbumsComponent {
  public albums: any[] = [];

  constructor(private _route: ActivatedRoute) { 
    //We subscribe to the observable of the resolved data and we map the properties we need.
    this._route.data.subscribe((data: { topAlbums: any[] }) => {
      //The ... is the spread operator: https://basarat.gitbooks.io/typescript/content/docs/spread-operator.html
      this.albums.push(...data.topAlbums);
    });
   }
}