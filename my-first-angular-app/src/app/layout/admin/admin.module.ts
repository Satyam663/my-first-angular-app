import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AllCustomerComponent } from './all-customer/all-customer.component';
import { AllTransactionComponent } from './all-transaction/all-transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { RemarkspipePipe } from 'src/app/shared/pipe/remarkspipe.pipe';
import { ShowpipePipe } from 'src/app/shared/pipe/showpipe.pipe';

@NgModule({
  declarations: [AdminComponent, AllCustomerComponent, AllTransactionComponent, AddTransactionComponent ,RemarkspipePipe, ShowpipePipe,],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule
    ,MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule
    
  ],
  
})
export class AdminModule { }
