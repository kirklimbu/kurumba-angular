import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then(m => m.HomeModule),
        data: {

        }

      },
      {
        path: 'student',
        loadChildren: () => import('./../student/student.module').then(m => m.StudentModule),
        data: {

          breadcrumb: 'Student',

          // allowedRoles: [UserRoleType.SYSTEM_ADMIN, UserRoleType.SUPER_ADMIN]
        },
        // canActivate: [UserRoleGuard]

      }
    ]
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
