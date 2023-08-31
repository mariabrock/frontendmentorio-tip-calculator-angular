import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  // @Input('total-bill') totalBill: number;
  // @Input('custom') customTip: number;
  // @Input('people-num') peopleToSplit: number;

  calculateBill() {

  }


  calculatePeople() {

  }


// to do:
// can I fix the input text font?
// show tip amount and total per person
// disable reset button unless both inputs have a number in them

}
