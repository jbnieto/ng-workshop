import { Component, OnInit } from '@angular/core';

import { Spotify } from '../_models/spotify';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [ SpotifyService ]
})

export class HomeComponent implements OnInit {
  spotify: Spotify[];

  constructor(
    private spotifyService: SpotifyService
  ) { }

  getEulas(): void {
    this.spotifyService.getSongs()
			.subscribe(val => this.spotify = val);
  }

  ngOnInit() {
    this.getEulas();
  }

}
