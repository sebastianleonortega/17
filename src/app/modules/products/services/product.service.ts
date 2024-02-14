import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "@app/modules/products/pages/list/list.component";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  constructor() { }

  getProducts(category_id?: string){
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if (category_id){
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getProductsById(id : string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
