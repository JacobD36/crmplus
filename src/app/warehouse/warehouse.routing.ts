import { Route } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreComponent } from './store/store.component';
import { ShippingComponent } from './shipping/shipping.component';

export const WarehouseRoutes: Route[] = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'store',
        component: StoreComponent
    },
    {
        path: 'shipping',
        component: ShippingComponent
    }
];