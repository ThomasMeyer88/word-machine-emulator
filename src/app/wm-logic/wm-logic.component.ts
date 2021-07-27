import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wm-logic',
  templateUrl: './wm-logic.component.html',
  styleUrls: ['./wm-logic.component.css']
})
export class WmLogicComponent {

  error: Boolean = false;
  stack: Number[] = [];

  inputForm = new FormGroup({
    inputString: new FormControl('')
  });

  constructor() { }

  

  input(arr: string) {
    let splitArr = arr.split(' ');
    splitArr.forEach(i => {
      this.processCommand(i);
    });
    this.inputForm.controls['inputString'].setValue('');
  }

  processCommand(i: any) {
    if (parseInt(i)) {
      this.stack.push(parseInt(i));
    } 
    else if ((i.toUpperCase() === "DUP" || i.toUpperCase() === "POP") && this.stack.length > 0) {
      if (i === "DUP") {
        this.stack.push(this.stack[this.stack.length - 1]);
      } else if (i === "POP") {
        this.stack.pop();
      }
    }
    else if ((i === '+' || i === "-") && this.stack.length > 1) {
      if (i === '+') {
        const v1 = this.stack.pop() as number;
        const v2 = this.stack.pop() as number;
        this.stack.push(v1 + v2);
      }
      if (i === '-') {
        const v1 = this.stack.pop() as number;
        const v2 = this.stack.pop() as number;
        this.stack.push(v2 - v1);     
      }
    }
    else {
      throw new Error('Can not be parsed');
    }

    console.log(this.stack);
  }
}
