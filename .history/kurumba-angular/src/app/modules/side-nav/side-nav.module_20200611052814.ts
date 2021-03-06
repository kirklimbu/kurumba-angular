import { AboutComponent } from './pages/about/about.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavRoutingModule } from './side-nav-routing.module';

@NgModule({
  declarations: [ AboutComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    SideNavRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    Shar
  ]
})
export class SideNavModule { }
