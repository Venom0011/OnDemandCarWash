import { Component } from '@angular/core';
import { signupModel } from '../Models/signupModel';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { EMPTY, empty } from 'rxjs';

@Component({
  selector: 'cws-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users:signupModel[]=[];
  
  constructor(private userservice:UserService,private router:Router){}
  
  Role=[
    {name:"Admin",value:"Admin"},
    {name:"Washer",value:"Washer"},
    {name:"Customer",value:"Customer"}
  ]

  selectedvalue:string= "";
 
  onSelectChange(event: any) {
    this.userservice.getFilteredUser(this.selectedvalue)
    .subscribe({
      next:(users)=>{
        this.users=users;
      }
    })
  }

  ngOnInit(){
    this.userservice.getAllUser()
    .subscribe({
      next:(users) =>{
       this.users=users;
       console.log(users);
       console.log(this.selectedvalue);

      },
      error:(response) =>{
        console.log(response);
        console.log(this.selectedvalue);
      }
    })
  }

  deleteuser(id?:number){
    this.userservice.deleteUser(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['/user-list']);
      }
      
    });
  }
  

  

}
