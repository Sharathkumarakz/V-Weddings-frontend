import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserCanDeactivateGuard implements CanDeactivate<any> {
  constructor(private authService: AuthService) {}

  async canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    console.warn('guard');
    try {
      const response: any = await this.authService.getUser().toPromise();
      console.log(response);
      
      if (response) {
        console.log(true);
        return true; // Allow deactivation
      } else {
        return false; // Prevent deactivation and redirect to home
      }
    } catch (error) {
      console.error('An error occurred during authentication:', error);
      return false; // Prevent deactivation and redirect to home in case of an error
    }
  }
}
