import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable() // Permet d'injecter un service dans un aure service
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('Checking AuthGuard...');
      if(this.authService.isAuth) {
          console.log('ok');
          return true;
        } else {
          console.log('nop');
          this.router.navigate(['/auth']);
        }
  }
}
