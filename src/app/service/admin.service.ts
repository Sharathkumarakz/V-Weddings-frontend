import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable, of } from 'rxjs';

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

  //image upload
  imgUpload(data:object){
    return this._http.post(`${this.baseUrl}/admin/addImage`,data,{withCredentials:true})
  }

  getCategoryWiseImages(id:string):Observable<object>{
    return this._http.get(`${this.baseUrl}/admin/category/`+id,{withCredentials:true})
  }

  deleteImage(id:string){
    return this._http.post(`${this.baseUrl}/admin/deleteImage/`+id,{withCredentials:true})
  }

  //delete Category
  deleteCategory(id:string){
    return this._http.post(`${this.baseUrl}/admin/deleteCategory/`+id,{withCredentials:true})
  }

  getCategoryWiseImagesDetails(id:string):Observable<object>{
    return this._http.get(`${this.baseUrl}/admin/categoryImage/`+id,{withCredentials:true})
  }

  getAllImages():Observable<object>{
    return this._http.get(`${this.baseUrl}/admin/images`,{withCredentials:true})
  }

  getUsers(){
    return this._http.get(`${this.baseUrl}/admin/users`,{withCredentials:true})
  }

  blockUser(id:string){
    return this._http.post(`${this.baseUrl}/admin/blockUser/`+id,{withCredentials:true})
  }
  unblockUser(id:string){
    return this._http.post(`${this.baseUrl}/admin/unBlockUser/`+id,{withCredentials:true})
  }

}
