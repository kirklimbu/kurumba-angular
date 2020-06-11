import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'change-password',
    component:ChangePasswordComponent
  },{
    path:'contact',
    component:Contac
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideNavRoutingModule { }
