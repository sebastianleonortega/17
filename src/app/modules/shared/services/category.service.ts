import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "@app/modules/products/pages/list/list.component";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  constructor() { }

  getCategories(){
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories')
  }
}
