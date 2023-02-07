import { Component, Input, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {
  
  @Input()
  order: Order | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
