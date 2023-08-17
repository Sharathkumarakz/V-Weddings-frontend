import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  baseUrl:string =environment.apiUrl


  
  //admin active
  adminActive(){
    return this._http.get(`${this.baseUrl}/admin/adminActive`,{withCredentials:true})
   }

  //user registration
  register(data:object){
   return this._http.post(`${this.baseUrl}/register`,data,{withCredentials:true})
  }

  //mail validation
  verifyMail(data:object){
    return this._http.post(`${this.baseUrl}/verifyMail`,data,{withCredentials:true})
  }

  //get user
  getUser(){
    return this._http.get(`${this.baseUrl}/user`,{withCredentials:true})
  }

  login(data:object){
    return this._http.post(`${this.baseUrl}/login`,data,{withCredentials:true})
  }
}
