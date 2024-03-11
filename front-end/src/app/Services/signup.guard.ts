import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupserviceService } from './signupservice.service';

@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if( this.signupservice.isLoggedIn()){
      return true;
    }
    else{
      this.route.navigate(['/login']);
      return false;
    }
  }
  
  constructor (private signupservice:SignupserviceService,private route:Router){}
}
