import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.userService.isLogged()){
        return true;
      }
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
}
