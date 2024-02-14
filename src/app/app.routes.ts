import { Routes } from '@angular/router';
import {ListComponent} from "./modules/products/pages/list/list.component";
import {AboutComponent} from "./modules/modules/info/pages/about/about.component";
import {NotFoundComponent} from "@shared/components/not-found/not-found.component";
import {LayoutComponent} from "@shared/layout/layout.component";
import {DetailProductComponent} from "@app/modules/products/pages/detail-product/detail-product.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'product/:id',
        component: DetailProductComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
