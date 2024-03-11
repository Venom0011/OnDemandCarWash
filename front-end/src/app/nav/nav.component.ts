import { Component } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';

@Component({
  selector: 'cws-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isLoggedIn(){
    return !!this.getAccessToken();
  }
  constructor(private signupservice:SignupserviceService){}
  
  
  logout(){
    this.signupservice.logout();
  }
  getAccessToken(){
    return localStorage.getItem('token');
  }
}
