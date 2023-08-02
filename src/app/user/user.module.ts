import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//routing module
import { UserRoutingModule } from './user-routing.module';

//components
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

//shared
import { SharedModule } from '../shared/shared/shared.module';
import { MailVerificationComponent } from './mail-verification/mail-verification.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserInterceptorInterceptor } from '../interceptor/user-interceptor.interceptor';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    RegisterComponent,
    MailVerificationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class UserModule { }
