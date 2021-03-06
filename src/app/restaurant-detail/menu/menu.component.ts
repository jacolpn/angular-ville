import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { VILLE_API } from './../../app.api';
import { MenuItem } from '../menu-item/menu-item.model';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.menu = this.http
      .get<Restaurant>(`${VILLE_API}/restaurants/bread-bakery/menu`);
  }

}
