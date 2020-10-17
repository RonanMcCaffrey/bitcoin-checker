import { Component, OnInit } from '@angular/core';
import Tabulator from 'tabulator-tables';
import { ITransaction } from './interfaces/transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ws;
  tableData: ITransaction[] = [];

  constructor() {
  }

  private addDataToTable(data): void {

    const unixTimestamp = data.timestamp; 
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);

    // Prepending data to tableData array so new data appears on top by default
    this.tableData.unshift({ timestamp: dateObject.toLocaleString('en-GB'), 
                              id: data.id, 
                              amount: data.amount, 
                              price: data.price
                          });
    // Changing tableData reference, so that change is picked up in child components
    this.tableData = this.tableData.slice();
  }

  private initWebsocket(): void {
    this.ws = new WebSocket("wss://ws.bitstamp.net");

    this.ws.onopen = () => this.ws.send(JSON.stringify({
      'event':'bts:subscribe',
      'data': {
        'channel': 'live_trades_btceur'
      }
    }));

    this.ws.onmessage = (evt) => {
      let response = JSON.parse(evt.data);
      switch (response.event) {
        // Add trade data to tableData array
        case 'trade': {
          this.addDataToTable(response.data);
          break;
        }
        // Try to reconnect
        case 'bts:request_reconnect': {
          this.initWebsocket();
          break;
        }
      }
    }
    // If connection closes, then try and reconnect
    this.ws.onclose = () => {
      this.initWebsocket();
    }
  }

  // Initialize websocket connection
  ngOnInit(): void {
    this.initWebsocket();
  }

}