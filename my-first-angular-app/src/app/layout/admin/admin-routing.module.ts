import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { AllTransactionComponent } from './all-transaction/all-transaction.component';
import { AllCustomerComponent } from './all-customer/all-customer.component';


const routes: Routes = [
  {
    path: "",
    component: AdminComponent, 
    // children: [
    //   {path: 'add-transaction', component: AddTransactionComponent}
    // ]
  },
  {
    path: "add-transaction", component: AddTransactionComponent
  },
  {
    path: "all-transaction", component: AllTransactionComponent
  },
  {
    path: "all-customer", component: AllCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
