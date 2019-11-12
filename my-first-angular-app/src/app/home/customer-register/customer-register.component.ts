import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit {
  userRegistration = new user();


  constructor(private _userService : UserService) { }

  ngOnInit() {
  }
  registration(){
    this.userRegistration.role = "Customer"
    console.log(this.userRegistration)
    this._userService.CustomerRegistration(this.userRegistration).subscribe((data) =>{
      alert("user successfully registered" + data);
    })
  }

}
