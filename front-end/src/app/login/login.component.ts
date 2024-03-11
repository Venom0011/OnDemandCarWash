import { Component } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { statusModel } from '../Models/statusModel';
import { validPattern } from '../signup/helper/pattern-match.validator';
import { loginModel } from '../Models/loginmodel';
import { Router } from '@angular/router';
import Swal from 'sweetalert';

@Component({
  selector: 'cws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUser:loginModel={
    email:'',
    password:''
  };
  constructor(
    private signUpService:SignupserviceService,
    private fb:FormBuilder,
    private route:Router
    )
    { }

  
  role="";
  onPost(){
    if (this.loginUser.email && this.loginUser.password) {
      console.log(this.loginUser.email);
      this.signUpService.login(this.loginUser).subscribe({
        next: (resp:any) => {
          this.signUpService.addToken(resp['token']);
          localStorage.setItem('payload',resp['payload']);
          
          this.role=this.signUpService.getUserRoles();
          if(this.role=='Admin'){
              this.route.navigate(['/admin-page']);
          }
          else if(this.role=='Washer'){
            this.route.navigate(['/washer']);
          }
          else{
             this.route.navigate(['/home']); 
          }

      },
      error:(err)=>{
        Swal(err.error);
      }
    })
  }

}

ngOnInit(){
  if(this.signUpService.isLoggedIn()){
    this.route.navigate(['/home'])
  }
}


}
