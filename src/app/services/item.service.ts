import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {

  url:string = 'http://localhost:3000/items';
  httpOptions = {
    headers: {
      'Content-type': 'application/json'
    }
  }
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
  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url);
  }

  addItem(item:Item):Observable<Item>{
    //this.items.unshift(item);
    debugger
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  toggleItem(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
  }
  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url +'/' + item.id);
  }
}
