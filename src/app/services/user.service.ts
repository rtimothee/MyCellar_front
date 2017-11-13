import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiService } from './api.service';
import { UserModel } from '../models/user.model'


@Injectable()
export class UserService {

	user: UserModel;

	constructor(public http: Http, private apiService: ApiService) {
		this.user = null;
	}

	setUser(user: any) {
		this.user = user;
	}

	getUser() : any {
		return new Promise((resolve, reject) => {
			if(this.user != null){
				resolve(this.user);
			} else{
				this.getUserFromApi().then((user) => {
					resolve(user);
				}, () => {
					reject();
				});
			} 
		});
	}

	login(login: string, password: string) : any{
		return new Promise((resolve, reject) => {
			this.apiService.oauth(login , password).then(() => {
				this.getUserFromApi().then((u: UserModel) => {
					this.user = u;
					resolve();
				}, () => {
					reject();
				});
			}, (err: any) => {
				reject(err);
			});
		});
	}

	logout() {
		this.apiService.emptyToken();
		this.user = null;
	} 

	isLogged() : boolean {
		if(this.apiService.checkToken()){
			console.log("userservice: logged");
			return true;
		}
		console.log("userservice : not logged");
		return false;
		// TODO add aerification about life token to optimize the number of server requetes
	}

	getUserFromApi(){
		return new Promise((resolve, reject) => {

			if(this.user != null) resolve(this.user);
			else {
				//get logged user
				this.apiService.get('user/current').then((data) => {
					resolve(new UserModel(data.id, data.username, data.email));
				}, (err) => {
					reject();
				});
			}
		});
	}
}
