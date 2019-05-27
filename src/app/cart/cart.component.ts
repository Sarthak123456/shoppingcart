import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private data: DataService) { }

  products = this.data.cart;
  number = 0;
  price = this.data.price;s

  ngOnInit() {
// Calculating the quantity on component load
    for ( let i = 0 ; i < this.data.cart.length; i++) {
      this.number += this.data.cart[i].quantity;
    }

  }


}
