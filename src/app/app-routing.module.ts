import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponent } from './components/add-item/add-item.component';


const routes: Routes = [
    {
        path:'',
        component: ItemsComponent
    },
    {
        path:'add',
        component: AddItemComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    // { enableTracing: true }) Uncomment this for debug routes
],
   
  exports: [RouterModule]
})
export class AppRoutingModule { }