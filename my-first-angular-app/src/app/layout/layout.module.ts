import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { SharedBarComponent } from './shared-bar/shared-bar.component';


@NgModule({
  declarations: [LayoutComponent, SharedBarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    
  ]
})
export class LayoutModule { }
