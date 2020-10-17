import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabulatorTableComponent } from './tabulator-table/tabulator-table.component';
import { AverageCalculatorComponent } from './average-calculator/average-calculator.component';
import { RegularTableComponent } from './regular-table/regular-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabulatorTableComponent,
    AverageCalculatorComponent,
    RegularTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
