import { VILLE_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private http: Http
  ) { }

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clear();
  }

  // checkOrder(order: Order): Observable<Order> {
    checkOrder(order: Order): Observable<string> {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post(
        `${VILLE_API}/orders`,
        JSON.stringify(order),
        new RequestOptions({ headers: headers })
      )
      .map(response => response.json())
      .map(order => order.id);
  }
}
