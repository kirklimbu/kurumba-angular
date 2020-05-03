import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './pages/student/student.component';
import { ClassFormComponent } from './shared/class-form/class-form.component';
import { ClassComponent } from './pages/class/class.component';
import { StudentFormComponent } from './shared/student-form/student-form.component';


@NgModule({
  declarations: [StudentComponent, ClassFormComponent, ClassComponent, StudentFormComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class StudentModule { }
