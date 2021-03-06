import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AllCustomerComponent } from './all-customer/all-customer.component';
import { AllTransactionComponent } from './all-transaction/all-transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';


@NgModule({
  declarations: [AdminComponent, AllCustomerComponent, AllTransactionComponent, AddTransactionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
