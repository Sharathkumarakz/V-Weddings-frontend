import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { UserInterceptorInterceptor } from './interceptor/user-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appEffects } from 'src/app/ngrx/app.effects';
import { likeReducer } from 'src/app/ngrx/app.reducer';


//guard
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({likedetails:likeReducer}), // Adjust the state key 'likes' accordingly
    EffectsModule.forRoot([appEffects]),
    ToastrModule.forRoot()
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:UserInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
