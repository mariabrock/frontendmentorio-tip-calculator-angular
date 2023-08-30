import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tip-calculator';

  // console.log("this works")
//
//   const totalBillInput = document.querySelector('#total-cost');
//   const numberOfPeople = document.querySelector('#people-num');
//   const tipSelected = document.querySelector('#tip-amounts');
// // const perPersonAmount
// // const customTip
//   const btnReset = document.querySelector('#reset');

// tip math:
// totalCostInput  * .05
// totalCostInput  *.10
// totalCostInput  * 0.15
// totalCostInput  * 0.25
// totalCostInput  * 0.50


  calculateBill() {

  }


  calculatePeople() {

  }

//   btnReset.addEventListener("click", (e) => {
//   //make everything equal zero or 1
//   //reset input
//   //reset tip percentage
//   // set 15% as default
// })


// tipSelected.forEach((btn => {
// //select active tip amount
// }))





// increasePeople()
// decreasePeople()

// to do:
// can I fix the input text font?
// show tip amount and total per person
// disable reset button unless both inputs have a number in them
}
