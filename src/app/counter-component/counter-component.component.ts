import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent {
  counter=0;
  Increment(event:Event){
    this.counter++;
  }
  Decrement(event:Event){
    this.counter--;
  }
  

}
