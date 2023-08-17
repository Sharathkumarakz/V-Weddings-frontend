import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserCandeactivateService implements CanActivate {

  constructor(private _auth:AuthService,private _router:Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {

      try {
        const response: any = await this._auth.getUser().toPromise();
        if (response) {
          this._router.navigate(['/']); 
          return false; //authentication success
        } else {
          return true; //authentication failed 
        }
      } catch (error) {
        console.error('An error occurred during authentication:', error); //authentication error hand/ing
        return true;
      }
    }
}

