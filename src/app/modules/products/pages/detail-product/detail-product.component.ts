import {Component, inject, Input, signal} from '@angular/core';
import {ProductService} from "@app/modules/products/services/product.service";
import {Product} from "@app/modules/products/pages/list/list.component";
import {CurrencyPipe, NgForOf, UpperCasePipe} from "@angular/common";
import {CartService} from "@shared/services/cart.service";

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    UpperCasePipe,
    NgForOf
  ],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit(){
    if (this.id){
      this.productService.getProductsById(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0){
            this.cover.set(product.images[0])
          }
        }
      })
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }

  addToCart(){
    const product = this.product();
    if (product){
      this.cartService.addToCart(product)
    }
  }

}
