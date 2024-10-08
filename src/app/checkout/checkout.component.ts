import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  paymentInfo: any;

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    // جلب المعلومات المخزنة من الخدمة
    this.paymentInfo = this.paymentService.getPaymentInfo();
  }
}
