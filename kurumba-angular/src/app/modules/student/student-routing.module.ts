import { StudentFormComponent } from './shared/student-form/student-form.component';
import { StudentComponent } from './pages/student/student.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: StudentComponent

  },
  {
    path: 'addStudent',
    component: StudentFormComponent,
    data: {
      breadcrumb: ' Add student'
    }

  },
  {
    // path: 'editStudent/:id',
    path: 'editStudent',
    component: StudentFormComponent,
    data: {
      breadcrumb: 'Edit student'
    }
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
