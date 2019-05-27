import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

products = this.data.products;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  addToCart(e) {
    return this.data.addToCart(e);
  }

}
