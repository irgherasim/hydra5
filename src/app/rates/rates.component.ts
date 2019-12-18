import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface Rate {
  bank: {
    name: string;
    id: string;
    rating: string;
    country: string;
    besuNode: string;
    enclaveId: string;
  };
  currency: {
    symbol: string;
    name: string;
  };
  band: {
    low: number;
    high: number;
  };
  tenor: {
    tenor: string;
  };
  rate: number;
  bespoke: boolean;
}
@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements AfterViewInit {
  displayedColumns = [
    'bank.name',
    'currency.symbol',
    'band.low',
    'band.high',
    'tenor.tenor',
    'rate',
    'bespoke'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @Input() dataSource: MatTableDataSource<Rate[]>;
  constructor() { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}



