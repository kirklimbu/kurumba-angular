import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { SideNavRoutingModule } from './side-nav-routing.module';

@NgModule({
  declarations: [ About],
  imports: [
    CommonModule,
    SideNavRoutingModule,
    MaterialModule
  ]
})
export class SideNavModule { }
