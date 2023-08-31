import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  tipForm: FormGroup;

  private initForm() {
    let totalBill = '';
    let customTip = '';
    let peopleToSplit = '';

    this.tipForm = new FormGroup({
      'total-bill': new FormControl()
    })
  }

}
