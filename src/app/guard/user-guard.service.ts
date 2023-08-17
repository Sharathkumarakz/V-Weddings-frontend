import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(private _auth:AuthService,private _router:Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {

      try {
        const response: any = await this._auth.getUser().toPromise();
        if (response) {
          console.log(true);
          return true; //authentication success
        } else {
          this._router.navigate(['/login']); 
          return false; //authentication failed 
        }
      } catch (error) {
        console.error('An error occurred during authentication:', error); //authentication error hand/ing
      this._router.navigate(['/login']);
        return false;
      }
    }
}
