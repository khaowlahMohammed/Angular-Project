import { Component, inject ,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-headre',
  templateUrl: './headre.component.html',  
  styleUrls: ['./headre.component.css'] // تأكد من استخدام "styleUrls" بدلاً من "styleUrl"
})
export class HeadreComponent {
private store = inject(Store);
count$?:Observable<number>;

  
onSearch($event: SubmitEvent) {
throw new Error('Method not implemented.');
}
  searchQuery: string = ''; // خاصية لتخزين قيمة البحث
  constructor(private orderService: OrderService)
  {
    this.count$=this.store.select("counter");
  }

  
    orderCount$ = this.orderService.orderCount$; // ملاحظة: استخدام $ للإشارة إلى أنه Observable



  ngOnInit(): void {}
  }
  

