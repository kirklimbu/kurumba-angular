import { AboutComponent } from './../../../../../.history/kurumba-angular/src/app/modules/side-nav/pages/about/about.component_20200610211708';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { SideNavRoutingModule } from './side-nav-routing.module';

@NgModule({
  declarations: [ AboutComponent],
  imports: [
    CommonModule,
    SideNavRoutingModule,
    MaterialModule
  ]
})
export class SideNavModule { }
