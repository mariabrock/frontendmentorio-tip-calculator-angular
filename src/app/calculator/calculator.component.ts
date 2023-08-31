import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  totalBill: number;
  customTip: number;
  numOfPeople: number;
  tipForm: FormGroup;
  invalid: true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.tipForm = new FormGroup({
      'totalBill': new FormControl('', Validators.required),
      'custom': new FormControl('', Validators.required),
      'numOfPeople': new FormControl('', Validators.required),
    });
  }

  calculateBill() {
    console.log(this.totalBill);
    console.log(this.customTip);
    console.log(this.numOfPeople);
  }

  calculatePeople() {

  }


// to do:
// can I fix the input text font?
// show tip amount and total per person
// disable reset button unless both inputs have a number in them

}
