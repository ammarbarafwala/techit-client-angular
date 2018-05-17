import { Component } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Techit';
	paths : {}[]
	currentUser: String;

	constructor(private router: Router) {
		this.paths = [
		{title: 'Home', url: 'home'},
		{title: 'Login', url: 'login'},
		{title: 'Tickets', url: 'tickets'}];
	}

	logout():void {
		localStorage.removeItem("token")
		this.router.navigateByUrl('login');
	}
	
}
