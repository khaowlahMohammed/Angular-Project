import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { increment } from '../state/counter/counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-skin',
  templateUrl: './skin.component.html',
  styleUrl: './skin.component.css'
})
export class SkinComponent {
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
