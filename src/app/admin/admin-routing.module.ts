import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ImageComponent } from './image/image.component';
import { PromoComponent } from './promo/promo.component';
import { UsersComponent } from './users/users.component';
import { AdminGuardService } from '../guard/admin-guard.service';
import { AdminDeactivateService } from '../guard/admin-deactivate.service';

const routes: Routes = [
  {path:'',component:LoginComponent,canActivate:[AdminDeactivateService]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AdminGuardService]},
  {path:'category',component:CategoryComponent,canActivate:[AdminGuardService]},
  {path:'images',component:ImageComponent,canActivate:[AdminGuardService]},
  {path:'images/:id',component:PromoComponent,canActivate:[AdminGuardService]},
  {path:'users',component:UsersComponent,canActivate:[AdminGuardService]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
