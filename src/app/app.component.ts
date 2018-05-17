import { Component } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { RemoteDataService } from './services/remote-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Techit';
	paths : {}[]
	loggedIn: boolean

	constructor(private router: Router, private dataService: RemoteDataService) {
		this.paths = [
		{title: 'Home', url: 'home'}];
	}
	ngOnInit(){
		this.dataService.loggedIn.subscribe(res=> this.loggedIn=res)
	}

	logout():void {
		localStorage.removeItem("token")
    localStorage.removeItem("exp")
    localStorage.removeItem("user")
		this.router.navigateByUrl('login');
		this.dataService.setFlag(false)
	}
	
}
