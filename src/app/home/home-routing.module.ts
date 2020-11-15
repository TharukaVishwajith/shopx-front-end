import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from './item-list/item-list.component';
import {ProductPriceComponent} from './product-price/product-price.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemListComponent
  },
  {
    path: 'items/:id',
    component: ProductPriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
