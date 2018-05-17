import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Ticket } from '../models/Ticket';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RemoteDataService {
  user:User = null

  constructor(private http: HttpClient) { }

  login(username, password):Observable<{token:string, exp:number, user:User}>{
    return this.http.post<{token:string, exp:number, user:User}>("/api/login", { username, password })
  }

  getTicketsRequested():Observable<{ title:string, tickets:Ticket[] }>{
    let headers = new HttpHeaders().append('Authorization', `Bearer ${localStorage.getItem("token")}`);
    return this.http.get<{ title:string, tickets:Ticket[] }>("/api/users/5af125ef11a96a2ac19e99f2/tickets",{headers})
  }

  createTicket(ticket:Ticket):Observable<Ticket>{
    let headers = new HttpHeaders().append('Authorization', `Bearer ${localStorage.getItem("token")}`);
    return this.http.post<Ticket>("/api/tickets", ticket, {headers})
  }
  
  getUser():User{
    return this.user
  }

  setUser(user:User){
    this.user = user
  }

}
