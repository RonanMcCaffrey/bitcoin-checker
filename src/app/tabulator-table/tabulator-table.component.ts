import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Tabulator from 'tabulator-tables';
import { ITransaction } from '../interfaces/transaction';

@Component({
  selector: 'app-tabulator-table',
  templateUrl: './tabulator-table.component.html',
  styleUrls: ['./tabulator-table.component.css']
})
export class TabulatorTableComponent implements OnChanges {

  @Input() tableData: ITransaction[] = [];
  columnNames: any[] = [];
  myTable: Tabulator;
  initialized: boolean = false;
  dataPresent: boolean = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      if (this.tableData.length > 0) {
        this.dataPresent = true;
        this.myTable.setData(this.tableData);
      }
    }
  }

  ngOnInit(): void {
    this.columnNames = [
      { title: "Timestamp", field: "timestamp"},
      { title: "Transaction ID", field: "id" },
      { title: "BTC Amount", field: "amount" },
      { title: "Price", field: "price", formatter:"money", formatterParams: {
        symbol:"€",
      }},
    ]
    this.myTable = new Tabulator("#my-tabular-table", {layout: 'fitColumns'});
    this.myTable.setColumns(this.columnNames);
    this.myTable.setData(this.tableData);
    this.initialized = true;
  }
}
