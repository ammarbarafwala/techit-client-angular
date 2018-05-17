import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Ticket } from '../../models/Ticket';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username, password):Observable<Response>{
    return this.http.post<Response>("/api/login", { username, password })
  }

  getTicketsRequested():Observable<Ticket []>{
    return this.http.get<Ticket []>("/api/users/")
  }
}
