import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicElement } from '../../admin/all-transaction/all-transaction.component';

@Component({
  selector: 'app-my-transaction',
  templateUrl: './my-transaction.component.html',
  styleUrls: ['./my-transaction.component.scss']
})
export class MyTransactionComponent implements OnInit {
  togglePipe: boolean = true;
  showMore: boolean = true;
  remarks:string[];
  showmore: boolean=true
  showless : boolean = false
  elements1:  any[];
  idArray: number[]=[0];
  term: string;
  constructor(){
    
    
}
ele  =[ 
  {id: 1,name: 'Atul', date: '12/11/2019', weight: '10', item: 'wheat', price: '100', paid: false,remark: 'With Payment Reminders feature, an automatic SMS is sent to your customers everytime a transaction is recorded against them. ' },
  {id: 2,name: 'sourabh', date: '25/06/2019', weight: '5', item: 'bajra', price: '60', paid: true,remark: 'Returns the character at the specified index (position) ' },
  {id: 3,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'Returns the Unicode of the character at the specified index ' },
  {id: 4,name: 'Ashish', date: '09/08/2019', weight: '25', item: 'chana', price: '500', paid: false,remark: 'Joins two or more strings, and returns a new joined strings ' },
  {id: 5,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'Checks whether a string ends with specified string/characters' },
  {id: 7,name: 'Atul', date: '12/11/2019', weight: '10', item: 'wheat', price: '100', paid: false,remark: 'Converts Unicode values to characters' },
  {id: 8,name: 'sourabh', date: '25/06/2019', weight: '5', item: 'bajra', price: '60', paid: true,remark: 'Checks whether a string contains the specified string/characters' },
  {id: 6,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'Returns the position of the first found occurrence of a specified value in a string' },
  {id: 9,name: 'Ashish', date: '09/08/2019', weight: '25', item: 'chana', price: '500', paid: false,remark: 'Returns the position of the first found occurrence of a specified value in a string' },
  {id: 10,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'Compares two strings in the current locale ' },
  {id: 11,name: 'Atul', date: '12/11/2019', weight: '10', item: 'wheat', price: '100', paid: false,remark: 'Searches a string for a match against a regular expression, and returns the matches' },
  {id: 12,name: 'sourabh', date: '25/06/2019', weight: '5', item: 'bajra', price: '60', paid: true,remark: 'Returns a new string with a specified number of copies of an existing string' },
  {id: 13,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced ' },
  {id: 14,name: 'Ashish', date: '09/08/2019', weight: '25', item: 'chana', price: '500', paid: false,remark: 'Transaction Failed' },
  {id: 15,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'Transaction Failed' },
  {id: 16,name: 'Atul', date: '12/11/2019', weight: '10', item: 'wheat', price: '100', paid: false,remark: 'Transaction Failed' },
  {id: 17,name: 'sourabh', date: '25/06/2019', weight: '5', item: 'bajra', price: '60', paid: true,remark: 'Transaction Successfull' },
  {id: 18,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'Transaction Failed' },
  {id: 19,name: 'Ashish', date: '09/08/2019', weight: '25', item: 'chana', price: '500', paid: false,remark: 'Transaction Failed' },
  {id: 20,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'Transaction Failed' },
  
  
];

  ngOnInit() {
    //we have clone new array of object from old one
      this.elements1=this.ele.map(a => ({...a}));
      
      console.log(this.elements1)
      //MAKE CHANGES IN NEW ARRAY 
      for(var i =0;i<this.elements1.length;i++){
        if(this.elements1[i].remark.length > 20){
          this.elements1[i].remark = this.elements1[i].remark.substring(0, 21)+'....' ;
        }
      }
    
    
}
   
showMoreText(trans){
 var index =this.elements1.indexOf(trans)
 console.log(this.ele[0].remark)
 this.elements1[index].remark=this.ele[index].remark;
 this.idArray.push(trans.id);
}
showlesstext(trans){
  var index =this.elements1.indexOf(trans)
  this.elements1[index].remark = this.elements1[index].remark.substring(0, 21)+'....' ;
  if(this.idArray.includes(trans.id)){
    this.idArray.splice(this.idArray.indexOf(trans.id), 1); 
    //it will remove the id from idarray and removed element are 1
   
  }

}
checkMe(trans){
  //return true if id is present in array
 return this.idArray.includes(trans.id)
}

}

