
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  routeURL: string;

  constructor(private router      : Router,
    private menuCtrl     : MenuController) {
    this.routeURL = this.router.url;
  }

  // the Router call canActivate() method,
  // if canActivate is registered in Routes[]
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
      let self = this
    // here we check if user is logged in or not
    // the authService returs user object, or
    // it returns undefined/null when user is not logged in

    // SINCE OUR 'authService.user' IS OF TYPE 'Observable'
    // WE MUST USE 'subscribe' TO GET VALUE OF 'user'
    return new Promise((resolve, reject) => {
      //this.authdataService.fireAuth.onAuthStateChanged((user) => {
        //this.authdataService.user.subscribe((user) => {
          //fetch user local user id
          const localUserId =  localStorage.userId;
          //const localUserData = this.localService.localUserData;
        if (!localUserId && this.routeURL !== '/login') {
          this.routeURL = '/login';
          // when the user is not logged in,
          // instead of just returning false
          // inject router and redirect to '/login' or any other view

          self.menuCtrl.enable(false);
          self.menuCtrl.swipeGesture(false);
          this.router.navigate(['/login'], {
            // note: this queryParams returns the current URL
            // that we can have in 'return' parameter,
            // so when the '/login' page opens,
            // this param tell us from where it comes
            // read-more to understand better👇👇
            queryParams: {
              return: state.url
            }
          });
          return resolve(false);
        }
        else {
          //self.menuCtrl.enable(true);
          //self.menuCtrl.swipeGesture(true);
          this.routeURL = this.router.url;
          // just return true - if user is logged in
          return resolve(true);
        }
      //});
    });
  }
}
