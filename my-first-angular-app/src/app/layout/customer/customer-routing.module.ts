import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';


const routes: Routes = [
  {
    path: "",
    component: CustomerComponent, 
    // children: [
    //   {path: 'admin', loadChildren: './layout/admin/admin.module#AdminModule'}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
