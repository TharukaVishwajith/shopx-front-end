import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {HomeRoutingModule} from './home-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { AddToCartDialogComponent } from './add-to-cart-dialog/add-to-cart-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, NgModel} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { ProductPriceComponent } from './product-price/product-price.component';



@NgModule({
  declarations: [ItemListComponent, AddToCartDialogComponent, ProductPriceComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class HomeModule { }
