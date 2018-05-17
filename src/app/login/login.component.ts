import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

import {LoginService} from '../services/login/login.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private router: Router, private loginService: LoginService) { }

	username : String;
	password : String;

	ngOnInit() {
		//This is messy change this
		if (localStorage.getItem("token") != null){
			this.router.navigateByUrl('home');
		}
	}

	login() : void {
		console.log('hi')
		this.loginService.login(this.username, this.password).subscribe((res:any)=>{
			console.log(res)
			localStorage.setItem("token", res.token)
			this.router.navigateByUrl('home');
		},
			(err:any)=>console.log(err)
	)}

}
