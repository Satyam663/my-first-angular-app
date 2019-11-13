import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';


const routes: Routes = [
  {
    path: "",
    component: CustomerComponent, 
    // children: [
    //   {path: 'admin', loadChildren: './layout/admin/admin.module#AdminModule'}
    // ]
  },
  {
    path: "my-transaction", component: MyTransactionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
