import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import Swal from 'sweetalert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PlansComponent } from './plans/plans.component';

import { SignupComponent } from './signup/signup.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { WasherpageComponent } from './washerpage/washerpage.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';
import { WashpackageComponent } from './washpackage/washpackage.component';
import { AddonComponent } from './addon/addon.component';
import { EditwashpackageComponent } from './editwashpackage/editwashpackage.component';
import { EditaddonComponent } from './editaddon/editaddon.component';
import { PaymentComponent } from './payment/payment.component';
import { UserService } from './Services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    LocationComponent,
    LoginComponent,
    NavComponent,
    PlansComponent,

    SignupComponent,
    AdminpageComponent,
    WasherpageComponent,
    UserComponent,
    WashpackageComponent,
    AddonComponent,
    EditwashpackageComponent,
    EditaddonComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, 
    useClass:UserService,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
