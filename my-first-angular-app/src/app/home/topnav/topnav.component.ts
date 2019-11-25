import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  a = false;
  admin = "";
  term: string;
  constructor(private _router: Router, private _userService :UserService) { }

  ngOnInit() {
    this.admin = this._userService.getUserName();
  }
  logout(){
    this._userService.logOut();
    console.log("logout")
    this._router.navigate(['\home']);
  }


}
