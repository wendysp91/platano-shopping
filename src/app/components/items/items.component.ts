import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    //this.items = [];
    this.items = this.itemService.getItems();
    this.getTotal();
  }
  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id !== item.id);
    this.getTotal();
  }
  toggleItem(item:Item){
    this.getTotal();
  }
  getTotal(){
    this.total = this.items
                .filter(item => !item.completed)
                .map(item => item.price*item.quantity)
                .reduce((acc, item) => acc+=item, 0);
                
  }
}
