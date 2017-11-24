import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user.model';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

	id: number;
	user: UserModel;
	
	constructor(private userService: UserService) {
		userService.getUser().then((user) => {
			this.user = user;
		}, () => {});
	}
  ngOnInit() {
  }

}
