import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  
  productForm = new FormGroup({
    type: new FormControl('',[Validators.required]),
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    detail: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required,Validators.max(50),Validators.min(1)]),
    price: new FormControl('',[Validators.required,Validators.max(100000),Validators.min(1)])
  });
  get quantity() { return this.productForm.get('quantity');}
  productType: string[] = ['CPU','RAM','HDD','Mainboard'];
 
  constructor() { }

  ngOnInit(): void {
  }

}
