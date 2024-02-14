import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Product} from "../list/list.component";
import {ReversePipe} from "@shared/pipes/reverse.pipe";
import {TimeAgoPipe} from "@shared/pipes/time-ago.pipe";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();


   imgPro?: string;
   imgAlt?: string;

  ngOnInit(){
    this.imgAlt= "assets/images/alt.png"
    this.imgPro= this.product.images[0];
  }

  addToCartHandler(){
    this.addToCart.emit(this.product);
  }

}
