import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  baseUrl:string =environment.apiUrl


  //get Categories
  category():Observable<object>{
    return this._http.get(`${this.baseUrl}/admin/category`,{withCredentials:true})
  }
}
