import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/services/order.service';
import { UserService } from '../shared/services/user.service';

interface Item {
  id: number;
  itemname: string;
  price: number;
  shopname: string;
}

interface Order {
  id: number,
  itemList: Item[]
}


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {



  orders: Order[] = [];
 chosenOrder: Order|undefined;
  constructor(public orderService: OrderService, public userService: UserService) { }

  ngOnInit(): void {
    this.getUserOrder();
  }

  getUserOrder(): void {
    this.orderService.getUserOrder(this.userService.getUserId()).subscribe((res) => {
      console.log(res);
      this.orders = res;
    })
  }

  sumOfOrder(order: Order): number {
    let sum = 0;
    for (let i = 0; i < order.itemList.length; i ++) {
      sum += order.itemList[i].price;
    }
    return sum;
  }

  checkDetails(order: Order) {
    this.chosenOrder = order;
    console.log(order);
  }
}
