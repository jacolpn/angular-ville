import { Restaurant } from './restaurant-list.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurant-list',
  templateUrl: './restaurant-list.component.html'
})
export class RestaurantListComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
