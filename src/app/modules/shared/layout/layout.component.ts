import { Component } from '@angular/core';
import {CounterComponent} from "@shared/components/counter/counter.component";
import {HeaderComponent} from "@shared/components/header/header.component";
import {HighlightDirective} from "@shared/directives/highlight.directive";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CounterComponent,
    HeaderComponent,
    HighlightDirective,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
