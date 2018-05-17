import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { RemoteDataService } from '../services/remote-data.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private router: Router, private dataService: RemoteDataService) { }

	username : string;
	password : string;

	ngOnInit() {
		//This is messy change this
		// if (localStorage.getItem("token") != null){
		// 	this.router.navigateByUrl('home');
		// }
	}

	login() : void {
		this.dataService.login(this.username, this.password)
		.subscribe(({token, exp, user})=>{
			localStorage.setItem("token", token)
			localStorage.setItem("exp", exp.toString())
			this.dataService.setFlag(true)
			this.router.navigateByUrl('home');
		},
			(err:any)=>console.log(err)
	)}

}
