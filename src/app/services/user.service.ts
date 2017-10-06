import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiService } from './api.service';


@Injectable()
export class UserService {

	user: any;

	constructor(public http: Http, private apiService: ApiService) {}

	setUser(user: any) {
		this.user = user;
	}

	getUser() : any {
		return this.user;
	}

	login(login: string, password: string) : any {
		return new Promise((resolve, reject) => {
			this.apiService.oauth(login , password, function(isLogged: boolean, status: string){
				(isLogged)? resolve(): reject(status);
			});
		});
	}
}
