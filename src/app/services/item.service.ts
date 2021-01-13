import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable()
export class ItemService {

  items:Item[] = [
    {
      id: 0,
      title: 'manzana',
      price: 10,
      quantity: 5,
      completed: false
    },
    {
      id: 1,
      title: 'pan',
      price: 2.5,
      quantity: 8,
      completed: true
    }
  ];
  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
