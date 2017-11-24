import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../../services/api.service';
import { CellarModel } from '../../../models/cellar.model';

@Component({
  selector: 'app-cellar',
  templateUrl: './cellar.component.html',
  styleUrls: ['./cellar.component.css']
})
export class CellarComponent implements OnInit {
	cellar: CellarModel;

  constructor(private api: ApiService) {
  	this.getCellar();
  }

  ngOnInit() {}

  getCellar(id?: number) {
  	let query = (id)?'cellar/'+id:'cellar';

  	this.api.get(query, {}).then((data) => {
  		console.log(data);
  	}, (err) => {
  		console.log(err);
  	});
  }

}
