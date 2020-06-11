import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'change-password',
    component:ChangeP
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideNavRoutingModule { }
