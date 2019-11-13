import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.scss']
})
export class AllCustomerComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'name', 'mobileNumber', 'address'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  userName: string;
  mobileNumber: number;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {userName: "saurabh", name: 'sourabh', mobileNumber: 2564123, address: 'khandwa'},
  {userName: "Atul", name: 'atlya', mobileNumber: 562459, address: 'pune'},
  {userName: "mitra", name: 'sourabhm', mobileNumber: 542564123, address: 'bengaluru'},
  {userName: "ashsis", name: 'manjee', mobileNumber: 25745745, address: 'ranchi'},
  {userName: "supriya", name: 'riya', mobileNumber: 2564187523, address: 'jhelum'},
  {userName: "saurabh", name: 'sourabh', mobileNumber: 2564123, address: 'khandwa'},
  {userName: "Atul", name: 'atlya', mobileNumber: 562459, address: 'pune'},
  {userName: "mitra", name: 'sourabhm', mobileNumber: 542564123, address: 'bengaluru'},
  {userName: "ashsis", name: 'manjee', mobileNumber: 25745745, address: 'ranchi'},
  {userName: "supriya", name: 'riya', mobileNumber: 2564187523, address: 'jhelum'},
  {userName: "saurabh", name: 'sourabh', mobileNumber: 2564123, address: 'khandwa'},
  {userName: "Atul", name: 'atlya', mobileNumber: 562459, address: 'pune'},
  {userName: "mitra", name: 'sourabhm', mobileNumber: 542564123, address: 'bengaluru'},
  {userName: "ashsis", name: 'manjee', mobileNumber: 25745745, address: 'ranchi'},
  {userName: "supriya", name: 'riya', mobileNumber: 2564187523, address: 'jhelum'},
  {userName: "saurabh", name: 'sourabh', mobileNumber: 2564123, address: 'khandwa'},
  {userName: "Atul", name: 'atlya', mobileNumber: 562459, address: 'pune'},
  {userName: "mitra", name: 'sourabhm', mobileNumber: 542564123, address: 'bengaluru'},
  {userName: "ashsis", name: 'manjee', mobileNumber: 25745745, address: 'ranchi'},
  {userName: "supriya", name: 'riya', mobileNumber: 2564187523, address: 'jhelum'},
  {userName: "saurabh", name: 'sourabh', mobileNumber: 2564123, address: 'khandwa'},
  {userName: "Atul", name: 'atlya', mobileNumber: 562459, address: 'pune'},
  {userName: "mitra", name: 'sourabhm', mobileNumber: 542564123, address: 'bengaluru'},
  {userName: "ashsis", name: 'manjee', mobileNumber: 25745745, address: 'ranchi'},
  {userName: "supriya", name: 'riya', mobileNumber: 2564187523, address: 'jhelum'},
];
