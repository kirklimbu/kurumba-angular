import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassxRoutingModule } from './classx-routing.module';
import { ClassxComponent } from './pages/classx/classx.component';
import { ClassFormComponent } from './shared/class-form/class-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClassxComponent, ClassFormComponent],
  imports: [
    CommonModule,
    ClassxRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClassxModule { }
