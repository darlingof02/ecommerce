import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./ecommerce/shared/services/auth.service";

@Injectable()
export class AppGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.loggedIn
        .pipe((isLoggedIn) => {
            if (!isLoggedIn) {
                this.router.navigate(['/login']);
            }
            return isLoggedIn;
        });
    }
}

@Injectable()
export class UserGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.userLoggedIn
        .pipe((userLoggedIn) => {
            
            return userLoggedIn;
        });
    }
}