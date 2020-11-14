import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/index';
import {HttpParams} from '@angular/common/http';
import {ProductPriceRequest} from '../models/ProductPriceRequest';

@Injectable()
export class ProductService {

  constructor(private apiService: ApiService) { }

  listProducts(request): Observable<any> {
    const httpParams = new HttpParams();
    // httpParams.append('page', request.page);
    // httpParams.append('size', request.size);
    return this.apiService.get( '/product/list?page=' + request.page + '&size=' + request.size , httpParams );
  }

  calculatePrice(productPriceRequest: ProductPriceRequest): Observable<any>{
    return this.apiService.post('/product/calculate-price' , productPriceRequest);
  }
}
