import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { signupModel } from '../Models/signupModel';
import { Observable } from 'rxjs';
import { SignupserviceService } from './signupservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements HttpInterceptor {

  
  basApiUrl:string=environment.baseUrl;
  constructor(private http:HttpClient,private injector:Injector) { }

  getFilteredUser(fiteredQuery?:string): Observable<signupModel[]>{
    let url = this.basApiUrl+'/api/User';
    // add query parameters if they are provided
    if (fiteredQuery) {
      url += `?fiteredQuery=${fiteredQuery}`;
    }
    return this.http.get<signupModel[]>(url);
  }

  getAllUser(): Observable<signupModel[]>{
    return this.http.get<signupModel[]>(this.basApiUrl+'/api/User');
  }

  

 

  deleteUser(id?:number): Observable<signupModel>{
    return this.http.delete<signupModel>(this.basApiUrl + '/api/User/'+id);
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let signupservice = this.injector.get(SignupserviceService);
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${signupservice.getAccessToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }

  sortUserByRole(fiteredQuery:string): Observable<signupModel[]>{
    return this.http.get<signupModel[]>(this.basApiUrl + '/api/User');
   }



}
