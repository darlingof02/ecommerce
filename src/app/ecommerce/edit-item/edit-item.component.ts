import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(public itemService: ItemService, public router: Router) { }

  ngOnInit(): void {
  }

  addItem(item: any) {
    console.log(item);
    this.itemService.addItem(item).subscribe((res)=>{
      if (res.success) {
        this.router.navigate(['/mainpage']);
      }
    });
    
  }

}
