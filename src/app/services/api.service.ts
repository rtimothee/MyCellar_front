import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { APP_CONFIG, OAUTH_CONFIG } from '../config/app.config';

@Injectable()
export class ApiService {

	token: string;
	refresh_token: string;
	token_type: string;


	constructor(public http: Http) {
		this.token = localStorage.getItem('token');
		this.refresh_token = localStorage.getItem('Refreshtoken');
	}

	oauth(login: string, password: string, callback: any) : any {
		const domain = APP_CONFIG.back_url;
		const query = "oauth/v2/token";
		let data, loading;
		loading = true;

		this.http.post(domain+query, {
			client_id: OAUTH_CONFIG.client,
			client_secret: OAUTH_CONFIG.secret,
			grant_type: 'password',
			username: login,
			password: password
		}).subscribe((res: Response) => {
			data = res.json();
			loading = false;

			this.token = data.access_token;
			this.refresh_token = data.refresh_token;
			this.token_type = data.token_type;
			localStorage.setItem('token', this.token);
			localStorage.setItem('Refreshtoken', this.refresh_token);

			callback(true);
		}, (err: Response) => {
			data = err.json();
			loading = false;

			callback(false, data.error);
		});
	}

	checkToken() : boolean{
		if(!this.token) this.token = localStorage.getItem('token');
		if(!this.refresh_token) this.token = localStorage.getItem('Refreshtoken');

		//TODO : Finish with call server

	}

	get(query: string, params: string[]){
		console.log("GET Query");
	}

	post(query: string, params: string[]){
		console.log("POST Query");
	}
}
