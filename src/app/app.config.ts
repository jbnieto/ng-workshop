export class AppConfig {
    public readonly apiUrl = 'https://api.spotify.com/v1/';
    //public readonly token = this.getCookie('token');

    public readonly token = "BQAM7FlfxNK4aNDAiie9TA40eW7fGWBEFj1MJxM4ZvfHoEms980UaBxfsl-DAitmGU-NmxLXT3dP3BuwOmr6F987qG5bzHVBw9ur2t-Fa7nuPCLCqhYqooDMyTWiCDbfDzVf6cVtQvd8";

    private getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = `${name}=`;
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
};