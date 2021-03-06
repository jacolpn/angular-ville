import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { VILLE_API } from './../app.api';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
      return this.http
        .get<Restaurant>(`${VILLE_API}/restaurants/bread-bakery`)
        .subscribe(restaurant => this.restaurant = restaurant);
  }

}
