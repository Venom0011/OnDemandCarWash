import { Component } from '@angular/core';
import { payment } from '../Models/paymentModel';
import { PaymentService } from '../Services/payment.service';

@Component({
  selector: 'cws-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  payments:payment[]=[];
  constructor(private paymentservice:PaymentService){}

  ngOnInit(){
    this.paymentservice.getAllPayment()
    .subscribe({
      next:(payments) =>{
       this.payments=payments;
       console.log(payments);
      },
      error:(response) =>{
        console.log(response);
      }
    })
  }
}
