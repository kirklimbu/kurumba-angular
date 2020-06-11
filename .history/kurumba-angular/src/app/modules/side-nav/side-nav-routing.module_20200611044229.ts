import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'chnange',
    component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideNavRoutingModule { }
