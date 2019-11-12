import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
   // console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role')
  }

  getUserName(){
    let user = sessionStorage.getItem('username')
    console.log((user))
    return (user);
  }
  getRole(){
    let role = sessionStorage.getItem('role')
    console.log((role))
    return (role);
  }
}
