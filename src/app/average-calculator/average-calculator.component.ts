import { Component, Input, OnChanges } from '@angular/core';
import { ITransaction } from '../interfaces/transaction';

@Component({
  selector: 'app-average-calculator',
  templateUrl: './average-calculator.component.html',
  styleUrls: ['./average-calculator.component.css']
})
export class AverageCalculatorComponent implements OnChanges {
  @Input() tableData: ITransaction[] = [];
  averageBitcoin: number;
  dataPresent: boolean;

  constructor() { 
    this.dataPresent = false;
  }

  ngOnChanges() {
    // Total the incoming bitcoin prices
    let summedPrice = this.tableData.reduce((accum,item) => accum + item.price, 0);
    
    // Now compute the average based on the number of incoming datapoints
    let average = summedPrice/this.tableData.length;
    if (!isNaN(average)) {
      this.dataPresent = true;
      this.averageBitcoin = average;
    }
    
  }

}
