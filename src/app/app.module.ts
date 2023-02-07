import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ecommerce/login/login.component';
import { LogoutComponent } from './ecommerce/logout/logout.component';
import { RegisterComponent } from './ecommerce/register/register.component';
import { MainpageComponent } from './ecommerce/mainpage/mainpage.component';
import { AppGuard } from './app.guard';
import { AuthService } from './ecommerce/shared/services/auth.service';
import { CartComponent } from './ecommerce/cart/cart.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ItemsComponent } from './ecommerce/orders/items/items.component';
import { AllOrdersComponent } from './ecommerce/all-orders/all-orders.component';
import { AllItemsComponent } from './ecommerce/all-orders/all-items/all-items.component';
import { EditItemComponent } from './ecommerce/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    MainpageComponent,
    CartComponent,
    OrdersComponent,
    ItemsComponent,
    AllOrdersComponent,
    AllItemsComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
