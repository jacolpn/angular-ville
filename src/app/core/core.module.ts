import { OrderService } from './../order/order.service';
import { RestaurantsService } from './../restaurant/restaurants.service';
import { NgModule } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";

@NgModule({
  providers: [
    ShoppingCartService,
    RestaurantsService,
    OrderService
  ]
})
export class CoreModule { }
