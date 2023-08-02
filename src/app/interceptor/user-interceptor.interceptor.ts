import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    let data=localStorage.getItem('vweddings')
    if(data){
     let tokennized=request.clone({
      setHeaders:{
        Authorization:`${data}`
      }
     })
     return next.handle(tokennized);
    }else{
      return next.handle(request);
    }
  }
}
