import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { increment } from '../state/counter/counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-perfumes',
  templateUrl: './perfumes.component.html',
  styleUrl: './perfumes.component.css'
})
export class PerfumesComponent {
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

  
 


}



  




