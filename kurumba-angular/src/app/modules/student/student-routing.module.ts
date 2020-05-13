import { StudentFormComponent } from './shared/student-form/student-form.component';
import { ClassFormComponent } from './shared/class-form/class-form.component';
import { ClassComponent } from './pages/class/class.component';
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

  {
    path: 'class',
    component: ClassComponent,
    data: {
      breadcrumb: 'Class'
    }

  },
  {
    path: 'class/addClass',
    component: ClassFormComponent,
    data: {
      breadcrumb: 'Add class '
    }

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
