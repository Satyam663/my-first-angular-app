import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [LayoutComponent,AdminComponent,CustomerComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    
  ]
})
export class LayoutModule { }
