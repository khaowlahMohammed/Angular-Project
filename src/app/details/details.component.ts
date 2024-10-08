import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { increment } from '../state/counter/counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  private store=inject(Store);
  count$?:Observable<number>;
  
  increment()
  {
   this.store.dispatch(increment());
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "تمت الإضافة الى السلة بنجاح",
    showConfirmButton: false,
    timer: 1500
  });
  }
  constructor(private route:ActivatedRoute){

    this.count$=this.store.select("counter");
  }
  products_data:any;
  str:any;
  ngOnInit() {
    this.str=this.route.snapshot.paramMap.get('id')
    fetch('https://fakestoreapi.com/products/' + this.str)
    .then((response) => response.json())
    .then((result) => (this.products_data = result));
    
  }
}
