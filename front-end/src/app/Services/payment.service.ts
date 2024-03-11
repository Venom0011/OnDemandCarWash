import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { payment } from '../Models/paymentModel';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  basApiUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllPayment(): Observable<payment[]>{
    return this.http.get<payment[]>(this.basApiUrl + '/api/Payment/GetPaymentwithUser');
   }
}
