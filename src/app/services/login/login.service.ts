import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  
  login(username, password):Observable<Response>{
    return this.http.post<Response>("/api/login", { username, password })
  }
}
