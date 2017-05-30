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
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = this.config.token;
        headers.append('Authorization', `Bearer ${authToken}`);
        
        return this.http.get(this.config.apiUrl + 'search?q=' + term + '&type=artist', { headers })
        .map(this.extractData);
    }

    searchAlbumsByIdArtist(id: string): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = this.config.token;
        headers.append('Authorization', `Bearer ${authToken}`);

        return this.http.get(this.config.apiUrl + 'artists/' + id + '/albums', { headers })
        .map(this.extractDataAlbums);
    }

    searchSongsByIdAlbum(id: string): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = this.config.token;
        headers.append('Authorization', `Bearer ${authToken}`);

        return this.http.get(this.config.apiUrl + 'albums/' + id , { headers })
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
