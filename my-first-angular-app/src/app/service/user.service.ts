import { Injectable } from '@angular/core';
import { ApiDispatcherService } from './api-dispatcher.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authUrl: string;
  authUrl2: string;
  constructor(private apidispatcher : ApiDispatcherService, private config: ConfigService) {
    const cfg =  this.config.getConfig();
    this.authUrl = cfg.restApis.customersApi;
    this.authUrl2=cfg.restApis.testApi;
   }

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
//  login(userid: string, password: string ,role: string) {
//     const postBody = {
//         "username" : userid,
//         "password" : password,
//         "role"     : role
//     }
//     return this.apiDispatcherService.doPostApiCall(this.authUrl, postBody);
//   }

//   public isLoggedIn(): boolean {
//     return localStorage.getItem('currentUser') !== null;
//   }

CustomerRegistration(user){
return this.apidispatcher.doPostApiCall(this.authUrl, user);
}
customerall(){
  return this.apidispatcher.doGetApiCall(this.authUrl2);
}
}
