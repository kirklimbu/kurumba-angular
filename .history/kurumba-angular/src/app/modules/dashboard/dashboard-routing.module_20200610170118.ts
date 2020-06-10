// Angular
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '';
// Project
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { SideNavModule } from '';

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

      },
      {
        path: 'class',
        loadChildren: () => import('./../classx/classx.module').then(m => m.ClassxModule),
        data: {

          breadcrumb: 'Class',

          // allowedRoles: [UserRoleType.SYSTEM_ADMIN, UserRoleType.SUPER_ADMIN]
        },
        // canActivate: [UserRoleGuard]

      },
      {
        path: 'year',
        loadChildren: () => import('./../year/year.module').then(m => m.YearModule),
        data: {

          breadcrumb: 'Student',

          // allowedRoles: [UserRoleType.SYSTEM_ADMIN, UserRoleType.SUPER_ADMIN]
        },
        // canActivate: [UserRoleGuard]

      },
      {
        path: 'exam',
        loadChildren: () => import('./../exam/exam.module').then(m => m.ExamModule),
      },
      {
        path: 'teacher',
        loadChildren: () => import('./../teacher/teacher.module').then(m => m.TeacherModule),
      },
      {
        path: 'side-nav',
        loadChildren: () => import('./shared/sidebar/pages/about/about.component').then(m => m.SideNavModule),
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
