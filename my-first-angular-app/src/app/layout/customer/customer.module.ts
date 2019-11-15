import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';
import { PayTransactionComponent } from './pay-transaction/pay-transaction.component';
import { MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatNativeDateModule, MatSelectModule, MatDatepickerModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [CustomerComponent, MakeTransactionComponent, MyTransactionComponent, PayTransactionComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule
    ,MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule
  ]
})
export class CustomerModule { }
