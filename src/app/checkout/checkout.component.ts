import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  loadingCurrentLocation: string;
  currentLocation: any;
  location = false;

  constructor(private data: DataService) { }


  products = this.data.cart;
  price = this.data.price;
  number = 0;

  ngOnInit() {
// Calculating the quantity on component load
    for ( let i = 0 ; i < this.data.cart.length; i++) {
      this.number += this.data.cart[i].quantity;
    }
  }

  city() {
    this.loadingCurrentLocation = 'loading...';
    navigator.geolocation.getCurrentPosition((position) => {
      return this.data.getCity((position.coords.latitude).toString() ,
   (position.coords.longitude).toString())
 .subscribe((res: any) => {
   this.currentLocation = res;
   this.location = true;
 },
 err => this.loadingCurrentLocation = 'Something went wrong!'
 );
 });
  }

}
