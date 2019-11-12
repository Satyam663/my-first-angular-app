import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { ApiDispatcherService } from './api-dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authUrl: string;
  constructor(private config: ConfigService,private apiDispatcherService: ApiDispatcherService) {
    const cfg =  this.config.getConfig();
    this.authUrl = cfg.restApis.authenticateApi;
   }
  // login(userid: string, password: string ,role: string) {
  //   const postBody = {
  //       "username" : userid,
  //       "password" : password,
  //       "role"     : role
  //   }
  //   return this.apiDispatcherService.doPostApiCall(this.authUrl, postBody);
  // }

  // public isLoggedIn(): boolean {
  //   return localStorage.getItem('currentUser') !== null;
  // }
  authenticate(username, password, role: string) {
    if (username === "admin" || "customer" && password === "admin" && role === "Admin" || "Customer") {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('role',role)
      return true;
    } else {
      return false;
    }
  }

 

}
