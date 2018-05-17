import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CheckLogoutGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let token = localStorage.getItem("token"),
      exp = parseInt(localStorage.getItem("exp"))
      if(token){
        this.router.navigateByUrl('home');
        return false
      }
      return true
  }
}
