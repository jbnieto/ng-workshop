export class Albums
{
	href: string;
	items: [ 
		{
			album_type: string,
			artists : string[],
			available_markets: {},
			external_urls: {},
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
			type: string,
			uri: string
		}
	];
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number
}
