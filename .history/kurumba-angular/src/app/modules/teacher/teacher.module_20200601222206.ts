import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { TeacherFormComponent } from './shared/teacher-form/teacher-form.component';
import { TeacherSubjectComponent } from './shared/teacher-subject/teacher-subject.component';


@NgModule({
  declarations: [TeacherComponent, TeacherFormComponent, TeacherSubjectComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
