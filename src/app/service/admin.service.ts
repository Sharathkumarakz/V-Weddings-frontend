import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }
  baseUrl:string =environment.apiUrl

  //admin login
  login(data:object){
    return this._http.post(`${this.baseUrl}/admin/login`,data,{withCredentials:true})
  }

  //add category
  addCategory(data:object){
    return this._http.post(`${this.baseUrl}/admin/addCategory`,data,{withCredentials:true})
  }

  //get Categories
  category():Observable<object>{
    return this._http.get(`${this.baseUrl}/admin/category`,{withCredentials:true})
  }
}
