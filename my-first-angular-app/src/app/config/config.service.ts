import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private baseApiUrl: string = '';
    constructor() {
      this.baseApiUrl = environment.appApiurl;
     }
     getConfig() {
       const apis = {
         authenticateApi: '/authenticate',

         //customer related APIs
         customersApi: '/api/register',
         testApi: '/comments'
       };
       return ({ "restApis": apis });
     }
}
