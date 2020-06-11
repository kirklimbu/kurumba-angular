// Angular
import { AboutComponent } from './pages/about/about.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';

// Project
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
