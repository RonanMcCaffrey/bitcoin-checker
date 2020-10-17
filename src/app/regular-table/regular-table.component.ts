import { Component, Input, OnChanges } from '@angular/core';
import { ITransaction } from '../interfaces/transaction';

@Component({
  selector: 'app-regular-table',
  templateUrl: './regular-table.component.html',
  styleUrls: ['./regular-table.component.css']
})
export class RegularTableComponent implements OnChanges {
  @Input() tableData: ITransaction[] = [];
  dataPresent: boolean;

  constructor() {
    this.dataPresent = false;
   }

  ngOnChanges(): void {
    if (this.tableData.length > 0) {
      this.dataPresent = true;
    }
  }

}
