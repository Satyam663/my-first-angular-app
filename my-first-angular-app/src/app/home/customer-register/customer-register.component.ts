import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit {
  userRegistration = new user();


  constructor() { }

  ngOnInit() {
  }
  registration(){
    this.userRegistration.role = "Customer"
    console.log(this.userRegistration)
  }

}
