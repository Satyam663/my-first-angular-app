import {Component, OnInit, ViewChild} from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-all-transaction',
  templateUrl: './all-transaction.component.html',
  styleUrls: ['./all-transaction.component.scss']
})
export class AllTransactionComponent implements OnInit {
  togglePipe: boolean = true;
  showMore: boolean = true;
  remarks:string[];
  names: string[]=[""];
  name:string;
  elements: PeriodicElement[]
  constructor(){
}
  ngOnInit() {

    
    this.elements  = [
      {id: 1,name: 'Atul', date: '12/11/2019', weight: '10', item: 'wheat', price: '100', paid: false,remark: 'i know you love me but i am jsut kidding you my kid ' },
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
      {id: 14,name: 'Ashish', date: '09/08/2019', weight: '25', item: 'chana', price: '500', paid: false,remark: 'hii julie how are you iam fine ' },
      {id: 15,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'hii julie how are you iam fine ' },
      {id: 16,name: 'Atul', date: '12/11/2019', weight: '10', item: 'wheat', price: '100', paid: false,remark: 'hii julie  ' },
      {id: 17,name: 'sourabh', date: '25/06/2019', weight: '5', item: 'bajra', price: '60', paid: true,remark: 'hii julie' },
      {id: 18,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'hii julie how are you iam fine ' },
      {id: 19,name: 'Ashish', date: '09/08/2019', weight: '25', item: 'chana', price: '500', paid: false,remark: 'hii julie how are you iam fine ' },
      {id: 20,name: 'Mitra', date: '05/06/2019', weight: '13', item: 'Red chilly', price: '130', paid: false,remark: 'hii julie how are you iam fine ' },
      
      
    ];
    
      
}
   
showMoreText(trans){
  this.togglePipe = !this.togglePipe;
  this.name = trans.remark;
  this.names.push(trans.remark)
  
}
showlesstext(trans){
  this.togglePipe = !this.togglePipe;
var removeindex = this.names.indexOf(trans.remark)
this.names.splice(removeindex, 1);
}
checkMe(trans){
  //return true if id is present in array
 return this.names.includes(trans.remark)
}
}


export class PeriodicElement {
  id:number;
  date: string;
  name: string;
  weight: string;
  item: string;
  price: string;
  paid: boolean;
  remark:string;
}

