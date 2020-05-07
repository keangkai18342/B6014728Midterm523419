import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { productsModel } from 'src/app/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: productsModel=[];

  constructor(private cartService: CartService) {
    this.cart=this.cartService.getcartProduct();

  }

  ngOnInit(): void {
  }

  getCounter(){
    return this.cartService.gettotal();
  }
  getSumPrice(){
    return this.cartService.getsumPrice();
  }
}
