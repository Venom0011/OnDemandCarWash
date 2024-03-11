import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { PlansComponent } from './plans/plans.component';
import { UserComponent } from './user/user.component';
import { washPackage } from './Models/washPackage';
import { WashpackageComponent } from './washpackage/washpackage.component';
import { AddonComponent } from './addon/addon.component';
import { EditwashpackageComponent } from './editwashpackage/editwashpackage.component';
import { SignupGuard } from './Services/signup.guard';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'washing-points',component:LocationComponent},
  {path:'plans',component:PlansComponent},
  {path:'admin-page',component:AdminpageComponent,canActivate:[SignupGuard]},
  {path:'user-list',component:UserComponent,canActivate:[SignupGuard]},
  {path:'wash-package',component:WashpackageComponent,canActivate:[SignupGuard]},
  {path:'addon-package',component:AddonComponent,canActivate:[SignupGuard]},
  {path:'payments',component:PaymentComponent,canActivate:[SignupGuard]},
  {path:'washpackage/edit/:id',component:EditwashpackageComponent,canActivate:[SignupGuard]},
  {path:'washpackage/delete/:id',component:EditwashpackageComponent,canActivate:[SignupGuard]},
  {path:'addon/edit/:id',component:EditwashpackageComponent,canActivate:[SignupGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
