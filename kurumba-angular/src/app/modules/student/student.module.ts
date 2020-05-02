import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './pages/student/student.component';
import { ClassFormComponent } from './shared/class-form/class-form.component';
import { ClassComponent } from './pages/class/class.component';


@NgModule({
  declarations: [StudentComponent, ClassFormComponent, ClassComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
  ]
})
export class StudentModule { }
