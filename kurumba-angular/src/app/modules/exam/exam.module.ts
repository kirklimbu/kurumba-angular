import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './pages/exam/exam.component';
import { DleComponent } from './pages/dle/dle.component';
import { InternalComponent } from './pages/internal/internal.component';
import { PrintMarksheetComponent } from './pages/print-marksheet/print-marksheet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ExamComponent, DleComponent, InternalComponent, PrintMarksheetComponent],
  imports: [
    CommonModule,
    ExamRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ExamModule { }
