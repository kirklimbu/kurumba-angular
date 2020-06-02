// Angular
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
// Project
import { TeacherComponent } from './pages/teacher/teacher.component';
import { TeacherFormComponent } from './shared/teacher-form/teacher-form.component';

const routes: Routes = [
  {
    path:'',
    component:TeacherComponent
  }, {
    path:'addTeache',
    component:TeacherFormComponent
  }, {
    path:'su',
    component:TeacherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
