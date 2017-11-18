import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { APP_CONFIG, OAUTH_CONFIG } from '../config/app.config';

@Injectable()
export class ApiService {

	token: string;
	refresh_token: string;
	token_type: string;
	domain: string = APP_CONFIG.back_url;


	constructor(public http: Http) {
		this.token = (localStorage.getItem('token'))?localStorage.getItem('token'):null;
		this.refresh_token = (localStorage.getItem('Refreshtoken'))?localStorage.getItem('Refreshtoken'):null;
	}


	/**
	 * Connexion Oauth2
	 *
	 * @param {string} login
	 * @param {string} password
	 */
	oauth(login: string, password: string) : any {
		return new Promise((resolve, reject) => {
			const query = "oauth/v2/token";

			this.http.post(this.domain+query, {
				client_id: OAUTH_CONFIG.client,
				client_secret: OAUTH_CONFIG.secret,
				grant_type: 'password',
				username: login,
				password: password
			}).subscribe((res: Response) => {
				let data = res.json();

				this.token = data.access_token;
				this.refresh_token = data.refresh_token;
				this.token_type = data.token_type;
				localStorage.setItem('token', this.token);
				localStorage.setItem('Refreshtoken', this.refresh_token);

				resolve();
			}, (err: Response) => {
				let data = err.json();

				reject(data.error);
			});
		});
	}


	/**
	 * Check if tokens are still valid
	 *
	 * @return {boolean} true if token valid
	 */
	checkToken() : boolean{
		if(null !== this.token && null !== this.refresh_token) {
			console.log("apiservice : token ok");
			return true;
		}

		console.log("apiservice : pas de token");
		return false;
		//TODO : Finish with call server
	}


	/**
	 * Delete Tokens
	 */
	emptyToken() : void{
		this.token = null;
		this.refresh_token = null;

		localStorage.removeItem('token');
		localStorage.removeItem('Refreshtoken');
	}


	/**
	 * Get Resquest to the API
	 *
	 * @param {string} query
	 * @param {object} params
	 * @return {Promise} Promise for asynchronous request
	 */
	get(query: string, params?: any) : any {
		if(!params) params = {};
		return new Promise((resolve, reject) => {
			console.log("GET Query");

			let data = null;
			let url = this.URLFormat(this.domain+query, Object.assign({}, params));

			console.log('test : ', url);

			this.http.get(url, {headers: this.getAuthorizationHeader()}).subscribe((res: Response) => {
					data = res.json();

					//traitement

					resolve(data);
				}, (err: Response) => {
					data = err.json();

					reject(data.error_description);
				});
		});
	}


	/**
	 * Post Resquest to the API
	 *
	 * @param {string} query
	 * @param {object} params
	 * @return {Promise} Promise for asynchronous request
	 */
	post(query: string, params: any) : any {
		return new Promise((resolve, reject) => {
			console.log("POST Query");
			let data = null;
			let header = {headers: this.getAuthorizationHeader()};
			//TODO: add verifications on params datas

			this.http.post(this.domain+query, params, header).subscribe((res: Response) => {
				data = res.json();

				//traitement

				resolve(data);
			}, (err: Response) => {
				data = err.json();

				reject(data.error_description);
			});
		});
	}

	getAuthorizationHeader(){
		let headers = new Headers();

		if(this.token != null){
			headers.append('Authorization', 'Bearer '+ this.token);
		}

		return headers;
	}


	URLFormat(url: string, params: any) : string {
		console.log("URLFormat", url, params);
		//TODO: Add some verification on the params format
		let newurl = url; 
		let tab_params = [];
		console.log("test before key()", params);
		let index = Object.keys(params); // BUG: ??? resolve Promise at this line ???
		console.log("test after key()");

		for(let i = 0; i < index.length; i++){
			tab_params.push(index[i]+'='+encodeURIComponent(params[index[i]]));
		}
		newurl += '?'+tab_params.join('&');
		console.log(newurl);
		return newurl;
	}
}
