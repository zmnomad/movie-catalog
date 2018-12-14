import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RouteGuardService implements CanActivate, CanActivateChild{

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!route.data.roles) {
      return true;
    }
    if (this.authService.isUser() && route.data.roles.includes(this.authService.user.role)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}
