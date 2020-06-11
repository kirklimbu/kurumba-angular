import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/pages/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    // data: {
    //   breadcrumb: 'Login Testing Breadcrumb'
    // }
  },
  {
    path: 'school',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    // canActivate: [AuthGuard]

  },
  // {
  //   path: '404',
  //   // component: PageNotFoundComponent
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'school/home'
  },
  // {
  //   path: '**',
  //   redirectTo: '404'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
