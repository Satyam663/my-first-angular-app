import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';
import { PayTransactionComponent } from './pay-transaction/pay-transaction.component';
import { MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatNativeDateModule, MatSelectModule, MatDatepickerModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms'
import { SearchpipePipe } from 'src/app/shared/pipe/searchpipe.pipe';

@NgModule({
  declarations: [CustomerComponent, MakeTransactionComponent, MyTransactionComponent, PayTransactionComponent, SearchpipePipe,],
  imports: [
    CommonModule,
    FormsModule,
     Ng2SearchPipeModule,
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
