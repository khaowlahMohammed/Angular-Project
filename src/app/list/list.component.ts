import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private route:ActivatedRoute){}
  products_data:any;
  str:any;


  ngOnInit() {
    this.str=this.route.snapshot.paramMap.get('str')
   
    fetch('https://fakestoreapi.com/products/category/' + this.str)
    .then((response) => response.json())
    .then((result) => (this.products_data = result));
     console.log(this.products_data);
    console.log('Component initialized:');
  }
}
