import { ExamComponent } from './pages/exam/exam.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalComponent } from './pages/internal/internal.component';
import { DleComponent } from './pages/dle/dle.component';
import { PrintMarksheetComponent } from './pages/print-marksheet/print-marksheet.component';


const routes: Routes = [
  {
    path: '',
    component: ExamComponent,
  }, {
    path: 'internal',
    component: InternalComponent,
    data: {
      breadcrumb: 'Internal marks entry'
    }
  }, {
    path: 'dle-see',
    component: DleComponent,
    data: {
      breadcrumb: 'DLE/SEE marks entry'
    }
  }, {
    path: 'printMarksheet',
    component: PrintMarksheetComponent,
    data: {
      breadcrumb: 'Print marksheet'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ExamRoutingModule { }
