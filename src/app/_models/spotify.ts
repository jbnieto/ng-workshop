export class Spotify
{
	artists: {
		href: string,
		items: [ 
		{
			external_urls: {},
			followers : {},
			genres: string[],
			href: string,
			id: string,
			images: [ 
				{
					height: number,
					url: string,
					width: number
				}, {
					height: number,
					url: string,
					width: number
				}, {
					height: number,
					url: string,
					width: number
				} 
			] | String[],
			name: string,
			popularity: number,
			type: string,
			uri: string
		}
	 ],
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number
  }
}