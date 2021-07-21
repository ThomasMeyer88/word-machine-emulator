import { Component } from '@angular/core';

@Component({
  selector: 'app-wm-logic',
  templateUrl: './wm-logic.component.html',
  styleUrls: ['./wm-logic.component.css']
})
export class WmLogicComponent {

  constructor() { }

  stack: Number[] = [];

  input(arr: any[]) {
    arr.forEach(i => {
      this.processCommand(i);
    });
  }

  processCommand(i: any) {
    if (typeof(i) === "number") {
      this.stack.push(i);
    } 
    if ((i === "DUP" || i === "POP") && this.stack.length > 0) {
      if (i === "DUP") {
        this.stack.push(this.stack[this.stack.length - 1]);
      } else if (i === "POP") {
        this.stack.pop();
      }
    }
    if ((i === '+' || i === "-") && this.stack.length > 1) {
      if (i === '+') {
        const v1 = this.stack.pop() as number;
        const v2 = this.stack.pop() as number;
        this.stack.push(v1 + v2);
      }
      if (i === '-') {
        const v1 = this.stack.pop() as number;
        const v2 = this.stack.pop() as number;
        this.stack.push(v1 - v2);     
      }
    }
  }

}
