import {Component, inject, Input, OnChanges, OnInit, signal, SimpleChanges} from '@angular/core';
import {ProductComponent} from "../product/product.component";

import {HeaderComponent} from "@shared/components/header/header.component";
import {CartService} from "@shared/services/cart.service";
import {ProductService} from "@app/modules/products/services/product.service";
import {CategoryService} from "@shared/services/category.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    HeaderComponent,
    RouterLink,
    NgForOf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit, OnChanges{

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id? : string;

  ngOnInit(){
    this.getCategories();
  }

  ngOnChanges(changes:SimpleChanges){
       this.getProducts()
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  getProducts(){
    this.productService.getProducts(this.category_id).subscribe( {
      next: (products)=> {
        this.products.set(products);
      },
      error: (error) => {
        console.log(error)
      }
    })
  };

  getCategories(){
    this.categoryService.getCategories().subscribe( {
      next: (data)=> {
        this.categories.set(data);
      },
      error: (error) => {
        console.log(error)
      }
    })
  };

}

export interface Product {
  id: number,
  title: string,
  price: number,
  images: string[],
  creationAt: string,
  description: string,
  category: Category,
}

export interface  Category {
  id: number,
  name: string,
  images: string,
}



// const initProducts: Product[] = [
//   {
//     id: Date.now(),
//     title: 'amborgesa',
//     price: 12000,
//     creationAt: '2025-01-05 12:34:56',
//     image: 'https://www.saborusa.com/ni/wp-content/uploads/sites/19/2019/11/Calma-tus-antojos-con-deliciosas-y-rapidas-recetas-Foto-destacada.png'
//   },
//   {
//     id: Date.now(),
//     title: 'Pinchos',
//     price: 4000,
//     creationAt: '2024-02-10 23:45:32',
//     image: 'https://www.vanguardia.com/binrepository/717x477/1c0/716d477/none/12204/XYBW/recetas_de_comidas_rapidas_saludables_VL345540_MG19446047.jpg'
//   },
//   {
//     id: Date.now(),
//     title: 'picada',
//     price: 20000,
//     creationAt: '2023-03-20 09:18:47',
//     image: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2023-07/10%20comidas%20ra%CC%81pidas%20en%2015%20min.jpg'
//   },
//   {
//     id: Date.now(),
//     title: 'sandwich',
//     price: 6000,
//     creationAt: '2024-01-10 17:32:59',
//     image: 'https://placeres.pe/wp-content/uploads/2023/11/Post.jpg'
//   },
//   {
//     id: Date.now(),
//     title: 'Perro caliente',
//     price: 13000,
//     creationAt: '2023-05-28 05:43:21',
//     image: 'https://egocitymgz.com/wp-content/uploads/2018/10/chd-1068x666.jpg'
//   },
//   {
//     id: Date.now(),
//     title: 'Pizza',
//     price: 8000,
//     creationAt: '2023-06-02 14:29:08',
//     image: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/08/08/fotografia-de-una-pizza.jpeg'
//   },
//   {
//     id: Date.now(),
//     title: 'Coca-cola 250ml',
//     price: 4000,
//     creationAt: '2023-07-17 18:56:42',
//     image: 'https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_gaseosa_coca_cola_10_oz_bebidas_liquidas_700x700.jpg?v=1620489361'
//   },
//   {
//     id: Date.now(),
//     title: 'jugo hit de mango 250ml',
//     price: 4000,
//     creationAt: '2023-08-09 10:22:35',
//     image: 'https://drinkcentral.co/wp-content/uploads/2023/03/POSTOBON-HIT-CAJITA-SABORES-200ml.webp'
//   }
//
// ];
// this.products.set(initProducts);
