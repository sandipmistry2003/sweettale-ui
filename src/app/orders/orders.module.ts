import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';


@NgModule({
  declarations: [PlaceOrderComponent, TrackOrderComponent, ViewOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
