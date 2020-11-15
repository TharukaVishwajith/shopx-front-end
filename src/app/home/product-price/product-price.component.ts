import { Component, OnInit } from '@angular/core';
import {ProductPriceResponse} from '../../core/models/ProductPrice';
import {ProductService} from '../../core/services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  priceList: ProductPriceResponse[] = [];
  loading: boolean;
  displayedColumns: string[] = ['noOfCartons', 'noOfUnits', 'cost'];
  productName: string;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    const productId = this.router.url.split('/')[2];
    this.getProductPriceList(productId);
    this.productName = localStorage.getItem('SELECTED_PRODUCT_NAME');
  }

  private getProductPriceList(request): void {
    this.loading = true;
    this.productService.retrivePriceList(request)
      .subscribe(data => {
        this.priceList = data;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }



}
