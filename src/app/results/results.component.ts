import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input('total-bill') totalBill: number;
  @Input('custom') customTip: number;
  @Input('people-num') peopleToSplit: number;

  tipForm: FormGroup;

}
