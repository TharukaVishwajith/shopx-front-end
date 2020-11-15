import { Component, OnInit } from '@angular/core';
import {Product} from '../../core/models/Product';
import {PageEvent} from '@angular/material/paginator';
import {ProductService} from '../../core/services/product.service';
import {AddToCartDialogComponent} from '../add-to-cart-dialog/add-to-cart-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  totalElements: number = 0;
  products: Product[] = [];
  loading: boolean;
  displayedColumns: string[] = ['id', 'name', 'cartonCost', 'calculate'];

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProducts({ page: "0", size: "10" });
  }

  private getProducts(request): void {
    this.loading = true;
    this.productService.listProducts(request)
      .subscribe(data => {
        this.products = data['content'];
        // console.log(this.products)
        this.totalElements = data['totalElements'];
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  nextPage(event: PageEvent): void {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getProducts(request);
  }

  openDialog(product: Product): void {
    const dialogRef = this.dialog.open(AddToCartDialogComponent, {
      data: {
        message: 'Calculate Price ',
        pid: product.id,
        pname: product.name,
        buttonText: {
          ok: 'calculate',
          cancel: 'close'
        }
      }
    });
  }
}


