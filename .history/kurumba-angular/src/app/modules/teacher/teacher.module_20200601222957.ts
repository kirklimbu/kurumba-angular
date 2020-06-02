// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { TeacherFormComponent } from './shared/teacher-form/teacher-form.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherSubjectComponent } from './pages/teacher-subject/teacher-subject.component';

@NgModule({
  declarations: [TeacherComponent, TeacherFormComponent, TeacherSubjectComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
