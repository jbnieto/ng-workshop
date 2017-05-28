import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { AppConfig } from './app.config';

@Injectable()
export class SpotifyService {

  constructor(
      private http: Http,
      private config: AppConfig
      ) { 
    this.http = http
  }

  searchArtistByName(term: string): Observable<any> {
      return this.http.get(this.config.apiUrl + 'search?q=' + term + '&type=artist')
      .map(this.extractData);
  }

  searchAlbumsByIdArtist(id: string): Observable<any> {
      return this.http.get(this.config.apiUrl + 'artists/' + id + '/albums')
      .map(this.extractDataAlbums);
  }

  searchSongsByIdAlbum(id: string): Observable<any> {
      return this.http.get(this.config.apiUrl + 'albums/' + id )
      .map(this.extractDataSongs);
  }
    
  private extractData(res: Response) {
      let body = res.json();
      return body.artists.items || { };
  }

  private extractDataAlbums(res: Response) {
      let body = res.json();
      return body.items || { };
  }

  private extractDataSongs(res: Response) {
      let body = res.json();
      return body.tracks.items || { };
  }

}
