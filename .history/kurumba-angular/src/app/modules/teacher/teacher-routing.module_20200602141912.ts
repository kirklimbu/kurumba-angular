// Angular
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
// Project
import { TeacherComponent } from './pages/teacher/teacher.component';
import { TeacherFormComponent } from './shared/teacher-form/teacher-form.component';
import { TeacherSubjectComponent } from './pages/teacher-subject/teacher-subject.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent
  }, {
    path: 'addTeacher',
    component: TeacherFormComponent,
    data:{
      breadcrumb:'Add Teacher'
    }
  }, {
    path: 'teacherSubject',
    component: TeacherSubjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
