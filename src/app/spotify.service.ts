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

  getSongs(): Observable<any> {
      return this.http.get(this.config.apiUrl + "?q=michael&type=artist")
      .map(this.extractData);
  }
    
  private extractData(res: Response) {
      let body = res.json();
      return body.artists.items || { };
  }

}
