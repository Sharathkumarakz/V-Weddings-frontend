import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { UserInterceptorInterceptor } from './interceptor/user-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


//guard
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:UserInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
