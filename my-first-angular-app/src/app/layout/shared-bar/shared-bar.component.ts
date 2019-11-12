import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-shared-bar',
  templateUrl: './shared-bar.component.html',
  styleUrls: ['./shared-bar.component.scss']
})
export class SharedBarComponent implements OnInit {
isAdmin: boolean;
  constructor( private _userService : UserService) { }

  ngOnInit() {
    if(this._userService.getRole() === "Admin") {
      this.isAdmin = true;

    } else {
      return false;
    }
  }

}
