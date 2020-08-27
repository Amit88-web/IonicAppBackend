import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import('./login/login.module').then( m => m.LoginPageModule)
     // canActivate: [AuthGuardService]
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
       canActivate: [AuthGuardService]
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
       canActivate: [AuthGuardService]
  },
  {
    path: "delivered",
    loadChildren: () =>
      import("./pages/delivered/delivered.module").then(
        (m) => m.DeliveredPageModule),
       canActivate: [AuthGuardService]
  },
  {
    path: "delivering",
    loadChildren: () =>
      import("./pages/delivering/delivering.module").then(
        (m) => m.DeliveringPageModule),
       canActivate: [AuthGuardService]
  },
  {
    path: "incentives",
    loadChildren: () =>
      import("./pages/incentives/incentives.module").then((m) => m.IncentivesPageModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
