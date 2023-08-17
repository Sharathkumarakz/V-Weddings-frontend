import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MailVerificationComponent } from './mail-verification/mail-verification.component';
import { LoginComponent } from './login/login.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { UserGuardService } from '../guard/user-guard.service';
import { LikesComponent } from './likes/likes.component';
import { UserCandeactivateService } from '../guard/user-candeactivate.service';

console.warn('user module')
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent,canActivate:[UserCandeactivateService]},
  {path:'login', component:LoginComponent,canActivate:[UserCandeactivateService]},
  {path:'v-wedding/:id/verify/:token', component:MailVerificationComponent},
  {path:'category/:id', component:CategoryViewComponent,canActivate:[UserGuardService]},
  {path:'likes', component:LikesComponent,canActivate:[UserGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
