export class AppConfig {
    public readonly apiUrl = 'https://api.spotify.com/v1/';

    public readonly token = "BQA_yxLVkLp4ej4VolE86RYc6RuFxumfVUwcc6j4XYADArEToHO1_6qxM-Dg3GlJX_SRrYaXN6pPnLOnNRjG_6iFosD0pQ6bvUFp9GUCuqRqrJzxuEKn3Y2uWbgt5GXm-jp8YmbAKHJO";

    //public readonly token = this.getCookie('token');

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