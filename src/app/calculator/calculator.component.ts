import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  // totalBill: number;
  // customTip: number;
  // numOfPeople: number;
  tipForm: FormGroup;
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  active: boolean = false;

  @Input('total-bill') totalBill: number;
  @Input('custom') customTip: number;
  @Input('people-num') numOfPeople: number;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tipForm = new FormGroup({
      'totalBill': new FormControl('value', [Validators.required, Validators.pattern(this.numberRegEx)]),
      'customTip': new FormControl('value', [Validators.required]),
      'numOfPeople': new FormControl('value', [Validators.required]),
    });
  }

  calculateBill() {
    console.log(this.totalBill);
  }

  calculatePeople() {
    console.log(this.numOfPeople);
  }

  calculateTip(customTip: number) {
    console.log(this.customTip);
  }



// to do:
// can I fix the input text font?
// show tip amount and total per person
// disable reset button unless both inputs have a number in them

}
