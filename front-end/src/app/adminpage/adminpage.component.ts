import { Component } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'cws-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  isLoggedIn(){
    return !!this.getAccessToken();
  }
  constructor(private signupservice:SignupserviceService,
              private router:Router){}
  
  
  logout(){
    this.signupservice.logout();
  }
  getAccessToken(){
    return localStorage.getItem('token');
  }

  isAdminPage(){
    return this.router.url=='/admin-page';
  }

}
