import { Component, OnInit } from '@angular/core';
import { RemoteDataService } from '../services/remote-data.service';
import { Ticket } from '../models/Ticket';
import { tick } from '@angular/core/testing';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  entries: Ticket[] = [];
  user:User = null

  constructor(private dataService: RemoteDataService) { }

  ngOnInit() {
    this.dataService.getTicketsRequested()
		.subscribe(({title,tickets})=>{
      this.entries = tickets
		},
			(err:any)=>console.log(err)
    )
  }

}
