import { Component, OnInit } from '@angular/core';
import { OrderComponent } from 'app/order/order.component';
import { Order } from 'app/order/order.model';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

  rated: boolean;
  whats: string;

  constructor() { }

  ngOnInit() {
  }
  
  rate() {
    this.rated = true;
  }
  
  redirectWhats() {
    this.whats = "";

    window.open(this.whats, '_blank');
  }
}
