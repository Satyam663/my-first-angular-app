import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';



const routes: Routes = [
  {
    path: "",
    component: LayoutComponent, 
    children: [
      // {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
      {path: 'admin',component: AdminComponent},
      {path: 'customer',component: CustomerComponent},
      // {path: 'customer', loadChildren: './customer/customer.module#CustomerModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
