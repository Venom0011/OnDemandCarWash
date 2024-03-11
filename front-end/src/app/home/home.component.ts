import { Component } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';

@Component({
  selector: 'cws-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private signUpService:SignupserviceService)
  {}
  
  role="";
  ngOnInit(){
  
  this.role=this.signUpService.getUserRoles();
}
}
