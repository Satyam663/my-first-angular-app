import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private userService: UserService) {}

  canActivate() {
    if (!this.userService.isUserLoggedIn()) {
      this._router.navigate(['/login']);
  } else {
      return true;
  }
  }
  
}
