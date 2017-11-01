import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

	id: number;

	constructor(private route: ActivatedRoute) {
		route.params.subscribe(params => { this.id = params['id']; });
	}
  ngOnInit() {
  }

}
