import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';
import { AllOrdersComponent } from './ecommerce/all-orders/all-orders.component';
import { CartComponent } from './ecommerce/cart/cart.component';
import { EditItemComponent } from './ecommerce/edit-item/edit-item.component';
import { LoginComponent } from './ecommerce/login/login.component';
import { LogoutComponent } from './ecommerce/logout/logout.component';
import { MainpageComponent } from './ecommerce/mainpage/mainpage.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { RegisterComponent } from './ecommerce/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [AppGuard],
    children: [
      {
        path: "logout",
        component: LogoutComponent
      },
      {
        path: "mainpage",
        component: MainpageComponent
      },
      {
        path: "cart",
        component: CartComponent
      },
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "ao",
        component: AllOrdersComponent
      },
      {
        path: "edit",
        component: EditItemComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
