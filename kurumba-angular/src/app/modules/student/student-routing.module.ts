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
    component: StudentComponent,
    data: {
      breadcrumb: ' Edit student'
    }

  },
  {
    path: 'editStudent',
    component: StudentComponent,
    data: {
      breadcrumb: ' Edit student'
    }
  },
  {
    path: 'class',
    component: ClassComponent ,
    data: {
      breadcrumb: ' '
    }

  },
  {
    path: 'addClass',
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
