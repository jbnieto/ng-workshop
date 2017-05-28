export class Songs
{
  album_type: string;
  artists: string[];
  available_markets: string[];
  copyrights: string[];
  external_ids: {};
  external_urls: {};
  genres: string[];
  href: string;
  id: string;
  images: string[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  tracks: [{
    items: [{
      height : number,
      url : string,
      width : number
    }];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number
  }];
  type: string;
  uri: string
}