import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private routes: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(localStorage.getItem('username')!=null){
      return true;
    }
    else{
      this.routes.navigate(['/login'],{queryParams:{returnUrl:state.url}});
      return false;
    }
  }
}
