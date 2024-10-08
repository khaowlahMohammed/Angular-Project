import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent {
  constructor(private paymentService: PaymentService, private router: Router) {}

  navigateToCheckout() {
    const paymentInfo = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      address: (document.getElementById('address') as HTMLInputElement).value,
      phone: (document.getElementById('phone') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      paymentMethod: (document.querySelector('input[name="paymentMethod"]:checked') as HTMLInputElement).value
    };

    // تخزين المعلومات في الخدمة
    this.paymentService.setPaymentInfo(paymentInfo);

    // التنقل إلى صفحة الشيك أوت
    this.router.navigate(['/checkout']);
  }
}
