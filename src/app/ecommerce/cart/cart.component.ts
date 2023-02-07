import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../shared/services/cart.service';
import { OrderService } from '../shared/services/order.service';
import { UserService } from '../shared/services/user.service';

interface Item {
  id: number;
  itemname: string;
  price: number;
  shopname: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[] = [];
  constructor(public cartService: CartService, public userService: UserService, public orderService: OrderService, public router: Router) { }

  ngOnInit(): void {
    this.cartService.getCart(this.userService.getUserId()).subscribe((res) => {
      // console.log(res);
      this.items = res;
    })
  }
  placeOrder(): void {
    this.orderService.placeOrder(this.userService.getUserId()).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/orders']);
    })
  }
}
