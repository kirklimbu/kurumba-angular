import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './pages/about/about.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
// Angular
import { CommonModule } from '@angular/common';
// Third-party
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
// Project
import { SharedModule } from 'src/app/shared/shared.module';
import { SideNavRoutingModule } from './side-nav-routing.module';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [ AboutComponent, ChangePasswordComponent, ContactComponent],
  imports: [
    CommonModule,
    SideNavRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SideNavModule { }
