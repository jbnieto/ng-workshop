import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Songs }         from '../_models/songs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.less']
})
export class SongsComponent implements OnInit {
  songs: Songs;

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.spotifyService.searchSongsByIdAlbum( params['id'] ))
        .subscribe(data => this.songs = data);
  }

}
