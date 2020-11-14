import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JwtService} from './services/jwt.service';
import {ApiService} from './services/api.service';
import {AuthService} from './services/auth.service';
import {ProductService} from './services/product.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    JwtService,
    AuthService,
    ProductService
  ]
})
export class CoreModule { }
