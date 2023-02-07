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
  uid: number,
  itemList: Item[]
}

interface UserOrder {
  id: number;
  username: string;
  order: Order;
}

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  userOrders: UserOrder[] = [];
  orders: Order[] = [];
 chosenOrder: Order|undefined;
  constructor(public orderService: OrderService, public userService: UserService) { }

  ngOnInit(): void {
    this.getUserOrder();
  }

  getUserOrder(): void {
    this.orderService.getAllOrder(this.userService.getUserId()).subscribe((res) => {
      console.log(res);
      this.userOrders = res;
      console.log("?????");
      console.log(this.userOrders[0].order);
      console.log("?????");
    })
  }

  getAllOrder(): void {
    this.orderService
  }

  sumOfOrder(order: UserOrder): number {
    let sum = 0;
    for (let i = 0; i < order.order.itemList.length; i ++) {
      sum += order.order.itemList[i].price;
    }
    return sum;
  }

  checkDetails(order: UserOrder) {
    this.chosenOrder = order.order;
    console.log(order);
  }

}
