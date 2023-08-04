import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MailVerificationComponent } from './mail-verification/mail-verification.component';
import { LoginComponent } from './login/login.component';
import { CategoryViewComponent } from './category-view/category-view.component';

console.warn('user module')
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'v-wedding/:id/verify/:token', component:MailVerificationComponent},
  {path:'category', component:CategoryViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
