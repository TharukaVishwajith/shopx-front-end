import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {HomeRoutingModule} from './home-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { AddToCartDialogComponent } from './add-to-cart-dialog/add-to-cart-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [ItemListComponent, AddToCartDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class HomeModule { }
