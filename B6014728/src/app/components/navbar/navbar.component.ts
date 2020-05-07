import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { productsModel } from 'src/app/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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