import { Component, OnInit, OnChanges } from '@angular/core';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';

import { Spotify } from '../_models/spotify';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [ SpotifyService ]
})

export class HomeComponent implements OnInit {
  spotify: Spotify;

  search: FormControl;
  searchForm: FormGroup;

  constructor(
    private spotifyService: SpotifyService,
    private fb: FormBuilder,
  ) { 

    this.search = new FormControl();
    this.searchForm = fb.group({
        search: this.search
    });

    this.searchForm.valueChanges
      .flatMap(
        data => this.spotifyService.searchArtistByName(data.search)
      )
      .subscribe(
        data => {
        console.log('Form changes', data);
        //spotify = data;
      }
    )

  }

  ngOnInit() {
  }

}
