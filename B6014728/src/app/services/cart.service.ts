import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProduct: productsModel = [];
  total: number = 0
  sumPrice: number=0;

  constructor(private productService: ProductService) { }

  add(id: number){
    this.cartProduct.push(this.productService.getSomeProduct(id));
    this.sumPrice += this.productService.getSomeProduct(id).price;
    this.total=this.cartProduct.length;
  }
  gettotal(){
    return this.total;
  }
  getsumPrice(){
    return this.sumPrice;
  }
  getcartProduct(){
    return this.cartProduct;
  }
}
