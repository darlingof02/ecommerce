import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CartService } from '../shared/services/cart.service';
import { ItemService } from '../shared/services/item.service';
import { UserService } from '../shared/services/user.service';

interface Item {
  id: number;
  itemname: string;
  price: number;
  shopname: string;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {

  items: Item[] = [];

  constructor(public itemService:ItemService, public cartService: CartService, public userService: UserService) { }

  ngOnInit(): void {
    console.log("hello");
    this.itemService.getAllItems().subscribe((res) => {
      // console.log(res);
      this.items = res;
    });
  }

  addItem(id: number): void {
    // console.log(id);
    this.cartService.addItem(this.userService.getUserId(), id).subscribe((res) => {
      // console.log(res);
    });
  }

  // display() {
  //   this.itemService.getAllItems().subscribe((res) => {
  //     console.log(res);
  //   })
  // }

}
