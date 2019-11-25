import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.scss']
})
export class AllCustomerComponent implements OnInit {
  toggle: boolean= true;
  elements: any[]
  arr : any[]
  
  start=0
  end=50
  constructor(private user:UserService){
    
}
  ngOnInit() {
    this.user.customerall().subscribe((data: any) =>{   
    data.forEach(element => {
    //  element.body= element.body.substring(0, 20) + '...' ;
    });
    this.elements = data
    });

    
}
showlesstext(trans){
this.toggle = true
this.end = 50
}
showmoretext(trans){
  this.toggle = false
 this.end =200;
}
}


