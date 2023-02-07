import { Component, Input, OnInit } from '@angular/core';

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
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input()
  order: Order | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
