import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant-list/restaurant-list.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService
      .restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
