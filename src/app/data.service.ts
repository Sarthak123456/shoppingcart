import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  products = [
    {
      id :  1,
      title : 'Product 1',
          img : 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/10/31/Photos/Processed/fruits-kFLF--621x414@LiveMint.jpg',
          price : '124',
          quantity : 0
    },
    {
      id :  2,
      title : 'Product 2',
      img : 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/10/31/Photos/Processed/fruits-kFLF--621x414@LiveMint.jpg',
      price : '20',
      quantity : 0

    },
    {
      id :  3,
      title : 'Product 3',
    img : 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/10/31/Photos/Processed/fruits-kFLF--621x414@LiveMint.jpg',
    price : '400',
    quantity : 0

    },
    {
      id :  4,
      title : 'Product 4 ',
    img : 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/10/31/Photos/Processed/fruits-kFLF--621x414@LiveMint.jpg',
    price : '100',
    quantity : 0

    },
    {id :  5,
      title : 'Product 5 ',
    img : 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/10/31/Photos/Processed/fruits-kFLF--621x414@LiveMint.jpg',
    price : '50',
    quantity : 0

    }
];

  cart: any = [];
  cost: number ;
  price = 0 ;

  constructor(private http: HttpClient) { }
// Add to Cart function
  addToCart(e) {
    this.products[e.target.value - 1 ].quantity++;
    this.cart.push(this.products[e.target.value - 1 ]);

    // Calculating the total price
    this.cart.map( cartItem => {
      this.cost = Number(cartItem.price);
    });
    this.price += this.cost ;

    // Removing redundant elemnts from Cart Array
    for ( let i = 0 ; i < this.cart.length; i++) {
      for ( let j = i + 1 ; j < this.cart.length ; j++) {
          if (this.cart[i].id === this.cart[j].id) {
              this.cart.splice(j, 1);
          }
      }
    }
  }

  // Getting city name from lat and long co-ordinated using external API

  getCity(lat: string, long: string) {

    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long +
    '&APPID=823ff873c1dfec24ab2cf53a54d75526&mode=json&units=metric');
  }
}
