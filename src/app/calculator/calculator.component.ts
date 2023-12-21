import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public tipForm: FormGroup;
  public active: boolean = false;

  // @Input('totalBill') totalBill: any;
  // @Input('customTip') customTip: any;
  // @Input('numOfPeople') numOfPeople: any;
  public totalBill: any = 0;
  public customTip: any = 0;
  public numOfPeople: any = 0;


  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.tipForm = new FormGroup({
      'totalBill': new FormControl<number[]>([] as number[], [Validators.required]),
      'customTip': new FormControl<number[]>([] as number[], [Validators.required]),
      'numOfPeople': new FormControl<number[]>([] as number[], [Validators.required]),
    });
  }

  calculateBill(event: Event) {
    // if(this.totalBill.valueOf !== null) {
    //   let value = this.totalBill.valueOf;
    //   let tipAmount =
    //   value * tipAmount
    // }
    console.log((event.target as HTMLTextAreaElement).value);
    return((event.target as HTMLTextAreaElement).value);
  }

  calculatePeople(event: Event) {
    console.log((event.target as HTMLTextAreaElement).value);
    return((event.target as HTMLTextAreaElement).value);
  }

  calculateTip(customTip: number) {
    console.log(customTip);

  }



// to do:
// show tip amount and total per person
// disable reset button unless both inputs have a number in them

}
