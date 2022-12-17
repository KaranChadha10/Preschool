import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  /**
   *
   * @param {Router} _router
   * @param {AccountService} _accountService
   */
  constructor(
    private _router: Router,
    private _accountService: AccountService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const user = this._accountService.userValue;
    if (user) {
      // check if route is restricted by role
      if (route.data['roles'] && route.data['roles'].indexOf(user.role) === -1) {
        // role not authorised so redirect to home page
        this._router.navigate(['/']);
        return false;
      }
      // authorised so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;

  }

}
