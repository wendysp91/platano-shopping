import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service'


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  id: number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    //this.itemService.addItem(item);
    this.itemService.addItem(item).subscribe(data => {
      this.router.navigate(['/']);
    });


  }
}
