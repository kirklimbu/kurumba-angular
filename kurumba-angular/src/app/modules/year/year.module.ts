import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YearRoutingModule } from './year-routing.module';
import { YearComponent } from './pages/year/year.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [YearComponent],
  imports: [
    CommonModule,
    YearRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class YearModule { }
