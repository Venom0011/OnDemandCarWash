import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { signupModel } from '../Models/signupModel';
import {  SignupserviceService } from '../Services/signupservice.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { validPattern } from './helper/pattern-match.validator';
import { statusModel } from '../Models/statusModel';
import Swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'cws-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor(private signupservice: SignupserviceService,private fb:FormBuilder,private routes:Router){ }
  frm!:FormGroup;
  status!:statusModel;

  get f(){
    return this.frm.controls;
  }
  onPost(){
    this.status = {statuscode:0,message:"wait.."};
    console.log(this.frm.value);
    this.signupservice.signup(this.frm.value).subscribe({
     next: (res)=>{
       console.log(res);
      //  this.status=res;
      //  this.frm.reset();
       Swal("Registered Successfully...Redirecting to Login page")
							.then((value) => {
                this.routes.navigate(['/login'])
							});
     },
     error: (err)=>{
      Swal(err.error);
     },
     complete:()=>{
      
     }
    })
  }
  ngOnInit():void{
    const patternRegex= new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$');
     // must be atleast 6 character long,must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character
    this.frm= this.fb.group({
      'fullName': ['',Validators.required],
      'email': ['',Validators.required],
      'password': ['',[Validators.required,validPattern(patternRegex)]],
      'address': ['',Validators.required],
      'role': ['',Validators.required]
    })
  }
 
}
