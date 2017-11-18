import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	login_form: FormGroup;
  message: string;
  loader: boolean;
  returnURL: string;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) {
  	this.login_form = fb.group({
  		'login': 	['', Validators.compose([Validators.required, Validators.minLength(5)])],
  		'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
  	});
    this.loader = false;

  	this.login_form.valueChanges.subscribe((form: any) => {
  		console.log("Changement : ", this.login_form);
  	});
  }

  ngOnInit() {
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login_submit(form: FormGroup){
    this.loader = true;
    this.message = "";

  	if(form.valid){
      // TODO : Revoir systeme de validation pour detecter la soumission du formulaire et pas juste le changement de champ
      console.log(form.value);
      // Systeme d'observable ? methode async ? => voir comment récupérer la réponse.
      this.userService.login(form.value.login, form.value.password).then(() => {
        this.loader = false;
        this.router.navigateByUrl(this.returnURL);
      }, (err) => {
        this.loader = false;
        this.message = err;
        //TODO : Alert service like : http://jasonwatmore.com/post/2016/12/08/angular-2-redirect-to-previous-url-after-login-with-auth-guard
      });
  	}
  	else{
  		alert("error");
      this.loader = false;
  	}
  }
}
