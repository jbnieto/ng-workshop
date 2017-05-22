import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Http, Response } from '@angular/http';

//Resolvers should implement the Resolve interface ALWAYS
@Injectable()
export class LastFMResolver implements Resolve<any> {
  //This is just a test API to show how a resolver works.
  private url: string = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=jamiroquai&api_key=da23a49686bb5f0bcb4464c1fdfae135&format=json';

  constructor(private _http: Http) {}

  resolve(): Promise<any> {
    return this._http.get(this.url).toPromise().then((response: Response) => {
      //I'm just passing the top 10 albums. If you want to run some experiments, LastFM api has a lot of methods.
      return response.json().topalbums.album.slice(0, 10);
    });
  }
}

