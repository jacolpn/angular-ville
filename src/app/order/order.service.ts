import { VILLE_API } from './../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private http: HttpClient
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
    return this.http.post<Order>(
      `${VILLE_API}/orders`,
      order,
      // { headers: headers } //Obriga estar logado
    )
      .pipe(map(order => order.id));
  }
}
