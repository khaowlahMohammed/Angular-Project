import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentInfo: any = {};

  constructor() { }

  setPaymentInfo(info: any) {
    this.paymentInfo = info;
  }

  getPaymentInfo() {
    return this.paymentInfo;
  }
}
