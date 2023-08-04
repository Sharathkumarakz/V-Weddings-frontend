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
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { PromoComponent } from './promo/promo.component';


@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    RegisterComponent,
    MailVerificationComponent,
    LoginComponent,
    CategoriesComponent,
    CategoryViewComponent,
    PromoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
