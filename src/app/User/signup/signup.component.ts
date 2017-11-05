import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	signup_form: FormGroup;
  message: string;
  loader: boolean;

  constructor(fb: FormBuilder, private userService: UserService) {
  	this.signup_form = fb.group({
  		'login': 	['', Validators.compose([Validators.required, Validators.minLength(5)])],
  		'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  		'password_confirmation': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  		//'email': ['', Validator.compose([validator.required, Validator.email()])]
  	});
    this.loader = false;

  	this.signup_form.valueChanges.subscribe((form: any) => {
  		console.log("Changement : ", this.signup_form);
  	});
  }

  ngOnInit() {
  }

  signup_submit(form: FormGroup){
    this.loader = true;
    this.message = "";
    
  	if(form.valid){
      // TODO : Revoir systeme de validation pour detecter la soumission du formulaire et pas juste le changement de champ
      console.log(form.value);
      // Systeme d'observable ? methode async ? => voir comment récupérer la réponse.
      /*this.userService.signup(form.value.login, form.value.password, form.value.email).then(() => {
        this.loader = false;
      }, (err) => {
        this.loader = false;
        this.message = err;
        //TODO : Alert service like : http://jasonwatmore.com/post/2016/12/08/angular-2-redirect-to-previous-url-after-login-with-auth-guard 
      });*/
  	}
  	else{
  		alert("error");
      this.loader = false;
  	}
  }
}
