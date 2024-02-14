import {Component, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required:true}) duration = 0;
  @Input({required:true}) message  = '';

  counter : number = 32;

  constructor() {

  }

}
