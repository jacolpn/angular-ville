import { trigger, transition, state, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { Restaurant } from './restaurant-list.model';

@Component({
  selector: 'mt-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('100ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantListComponent implements OnInit {

  restaurantState = 'ready';

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
