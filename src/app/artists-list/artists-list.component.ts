import { Component, Input, OnInit } from '@angular/core';

import { Spotify } from '../_models/spotify';

@Component({
  selector: 'app-artists-list',  
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.less']
})
export class ArtistsListComponent implements OnInit {
  @Input() spotify: Spotify;
  constructor() { }
 
  ngOnInit() {
  }

}
