import {Component, inject, Input, signal, SimpleChange} from '@angular/core';
import {Product} from "../../../products/pages/list/list.component";
import {CommonModule} from "@angular/common";
import {CartService} from "../../services/cart.service";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState)
  }

}
