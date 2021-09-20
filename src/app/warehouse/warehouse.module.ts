import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { WarehouseRoutes } from './warehouse.routing';
import { ShippingComponent } from './shipping/shipping.component';



@NgModule({
  declarations: [
    StoreComponent,
    DashboardComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(WarehouseRoutes)
  ],
  exports: [
    StoreComponent,
    DashboardComponent
  ]
})
export class WarehouseModule { }
