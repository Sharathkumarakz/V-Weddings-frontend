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

    //get Categories wise data
    getCategoryWiseImages(id:string):Observable<object>{
      return this._http.get(`${this.baseUrl}/admin/category/`+id,{withCredentials:true})
    }
//like post
    likePost(id:string){
      return this._http.get(`${this.baseUrl}/likeImage/`+id,{withCredentials:true})
    }

     //get details about category
    getCategory(id:string){
      return this._http.get(`${this.baseUrl}/admin/categoryDetails/`+id,{withCredentials:true}) 
    }

      //send message
      sendMessage(id:object){
        return this._http.post(`${this.baseUrl}/sendMail`,id,{withCredentials:true}) 
      }

         //liked images
         likedImages(){
          return this._http.get(`${this.baseUrl}/likes`,{withCredentials:true}) 
        }
}
