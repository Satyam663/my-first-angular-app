import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-all-transaction',
  templateUrl: './all-transaction.component.html',
  styleUrls: ['./all-transaction.component.scss']
})
export class AllTransactionComponent implements OnInit {

  displayedColumns: string[] = ['name', 'date', 'weight', 'item', 'price', 'paid'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  date: string;
  name: string;
  weight: string;
  item: string;
  price: string;
  paid: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Atul', date: '12/11/2019', weight: '10', item: 'wheat', price: '100', paid: false },
  {name: 'sourabh', date: '25/06/2019', weight: '5', item: 'bajra', price: '60', paid: true },
  {name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false },
  {name: 'Ashish', date: '09/08/2019', weight: '25', item: 'chana', price: '500', paid: false },
  {name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false },
  {name: 'Atul', date: '12/11/2019', weight: '10', item: 'wheat', price: '100', paid: false },
  {name: 'sourabh', date: '25/06/2019', weight: '5', item: 'bajra', price: '60', paid: true },
  {name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false },
  {name: 'Ashish', date: '09/08/2019', weight: '25', item: 'chana', price: '500', paid: false },
  {name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false },
  {name: 'Atul', date: '12/11/2019', weight: '10', item: 'wheat', price: '100', paid: false },
  {name: 'sourabh', date: '25/06/2019', weight: '5', item: 'bajra', price: '60', paid: true },
  {name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false },
  {name: 'Ashish', date: '09/08/2019', weight: '25', item: 'chana', price: '500', paid: false },
  {name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false },
  {name: 'Atul', date: '12/11/2019', weight: '10', item: 'wheat', price: '100', paid: false },
  {name: 'sourabh', date: '25/06/2019', weight: '5', item: 'bajra', price: '60', paid: true },
  {name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false },
  {name: 'Ashish', date: '09/08/2019', weight: '25', item: 'chana', price: '500', paid: false },
  {name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false },
  
  
];

