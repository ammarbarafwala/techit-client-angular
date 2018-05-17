import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Ticket } from '../models/Ticket';

@Injectable()
export class RemoteDataService {
  

  constructor(private http: HttpClient) { }

  login(username, password):Observable<Response>{
    return this.http.post<Response>("/api/login", { username, password })
  }

  getTicketsRequested():Observable<{ title:string, tickets:Ticket[] }>{
    let headers = new HttpHeaders().append('Authorization', `Bearer ${localStorage.getItem("token")}`);
    return this.http.get<{ title:string, tickets:Ticket[] }>("/api/users/5af125ef11a96a2ac19e99f2/tickets",{headers})
  }

}
