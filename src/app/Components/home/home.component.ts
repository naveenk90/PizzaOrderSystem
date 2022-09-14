import { Component, OnInit } from '@angular/core';
import { Products } from '../../Common/Models/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productsList: Products[] = [];

  constructor() {}

  ngOnInit() {
    this.bindProductsList();
  }

  bindProductsList(): void {
    this.productsList = [
      {
        id: '1',
        type: 'pizza',
        price: '120',
        name: 'Chicken Tikka',
        description: 'chicken tikka pizza with sauce',
        imageUrl:
          'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=800',
        ingredients: null,
      },
      {
        id: '2',
        type: 'pizza',
        price: '120',
        name: 'Margherita',
        description: 'Margherita pizza with sauce',
        imageUrl:
          'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=800',
        ingredients: null,
      },
    ];
  }
}
