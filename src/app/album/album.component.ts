import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Albums }         from '../_models/albums';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.less']
})
export class AlbumComponent implements OnInit {
  albums: Albums;

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.spotifyService.searchAlbumsByIdArtist( params['id'] ))
        .subscribe(data => this.albums = data);
  }

}
