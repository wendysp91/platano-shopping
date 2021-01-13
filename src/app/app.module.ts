import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header/header.component';
import { ItemComponent } from './components/items/item/item.component';
import { ItemsComponent } from './components/itemsss/items/items.component';
import { TotalComponent } from './components/total/total.component';
import { AddItemComponent } from './components/add-item/add-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    ItemsComponent,
    TotalComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
