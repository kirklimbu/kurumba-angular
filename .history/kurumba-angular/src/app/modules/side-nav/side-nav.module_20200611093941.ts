// Angular
import { CommonModule } from '@angular/common';
// Third-party
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
// Project
import { SharedModule } from 'src/app/shared/shared.module';
import { SideNavRoutingModule } from './side-nav-routing.module';

@NgModule({
  declarations: [ AboutComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    SideNavRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class SideNavModule { }
