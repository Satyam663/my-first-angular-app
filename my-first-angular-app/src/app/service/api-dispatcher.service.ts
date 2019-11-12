import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service'

import { isObject, isString } from 'util';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiDispatcherService {
  private baseApiUrl: string;
  constructor(private http: HttpClient) { 
    this.baseApiUrl = environment.appApiurl;
  }
   
  getRestUri(apiName: string, params?: any, query?: string) {
    var api = apiName;
    if (params && isObject(params)) {
        for(let param in params) {
            var pattern = new RegExp(':' + param, 'g');
            api = api.replace(pattern, params[param]);
        };
    }

    if (query && isString(query)) {
        api += '?' + query;
    }

    return this.baseApiUrl + api;
}

doGetApiCall(apiPath: string, params?: Object, queryParams?: string) {
    apiPath =  this.getRestUri(apiPath, params, queryParams)
    return this.http.get(apiPath);
}

  public doPostApiCall = (apiPath: any, postData?: any, headers?: any): any => {
    apiPath = this.baseApiUrl + apiPath;
    return this.http.post(apiPath, postData, headers);
};

public doPutApiCall = (apiPath: any, putData?: any, headers?: any): any => {
    return this.http.put(this.baseApiUrl + apiPath, putData, headers);
};

public doDeleteApiCall = (apiPath: any): any => {
    return this.http.delete(this.baseApiUrl + apiPath);
};

}
