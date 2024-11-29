import { Routes } from '@angular/router';
import path from 'path';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    { path: '', component: CheckoutComponent }, // Trang mặc định

];
