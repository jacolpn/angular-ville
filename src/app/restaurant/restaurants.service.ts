import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Restaurant } from './restaurant-list/restaurant-list.model';

import { VILLE_API } from './../app.api';

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${VILLE_API}/restaurants`)
      .map(response => response.json());
  }
}
