import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderCount$: any;
  incrementOrderCount() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
