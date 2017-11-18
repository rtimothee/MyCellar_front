import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	register_form: FormGroup;
  message: string;
  loader: boolean;

  constructor(fb: FormBuilder, private userService: UserService) {
  	this.register_form = fb.group({
  		'login': 	['', Validators.compose([Validators.required, Validators.minLength(5)])],
  		'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  		'confirmation': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  		'email': ['', Validators.compose([Validators.required, Validators.email])]
  	});
    this.loader = false;

  	this.register_form.valueChanges.subscribe((form: any) => {
  		console.log("Changement : ", this.register_form);
  	});
  }

  ngOnInit() {
  }

  register_submit(form: FormGroup){
    this.loader = true;
    this.message = "";
    
  	if(form.valid){
      console.log(form.value);
      // TODO : Revoir systeme de validation pour detecter la soumission du formulaire et pas juste le changement de champ
      this.userService.register(form.value.login, form.value.password, form.value.email).then((resp) => {
        this.loader = false;
      }, (err) => {
        this.loader = false;
        this.message = err;
      });
  	}
  	else{
  		alert("error");
      this.loader = false;
  	}
  }
}
