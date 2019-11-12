import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: "",
    component: AdminComponent, 
    // children: [
    //   {path: 'admin', loadChildren: './layout/admin/admin.module#AdminModule'}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
