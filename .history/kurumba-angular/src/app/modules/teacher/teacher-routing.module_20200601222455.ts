// Angular
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
// Project
import { TeacherComponent } from './pages/teacher/teacher.component';

const routes: Routes = [
  {
    path:'',
    component:TeacherComponent
  }, {
    path:'',
    component:TeacherComponent
  }, {
    path:'',
    component:TeacherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
