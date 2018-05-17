import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CheckLoginGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let token = localStorage.getItem("token"),
      exp = parseInt(localStorage.getItem("exp"))
    if(token == null)
      return false
    console.log(Math.floor(Date.now() / 1000) - exp)
    return true;
  }
}
