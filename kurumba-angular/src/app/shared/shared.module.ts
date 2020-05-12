
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { ListPageTemplateComponent } from './components/list-page-template/list-page-template.component';
import { NgxSpinnerComponent } from './components/ngx-spinner/ngx-spinner.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SaveCancelButtonsComponent } from './components/save-cancel-buttons/save-cancel-buttons.component';
import { TableTopBarComponent } from './components/table-top-bar/table-top-bar.component';
import { ConstantsComponent } from './components/constants/constants.component';
import { MaterialModule } from './material/material.module';
import { SubMenuFilterPipe } from './pipes/sub-menu-filter.pipe';
import { UserDetialService } from './services/user-detial.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';
// import { NpDatepickerModule } from 'angular-nepali-datepicker';





const DECLARATIONS: any[] = [
  ActionButtonsComponent,
  DeletePopupComponent,
  FormGroupComponent,
  ListPageTemplateComponent,
  NgxSpinnerComponent,
  PageHeaderComponent,
  SaveCancelButtonsComponent,
  TableTopBarComponent,
  ConstantsComponent,
  SubMenuFilterPipe,
  BreadcrumbComponent,
  // NpDatepickerModule
  // MaterialModule


];

@NgModule({
  declarations: [
    ...DECLARATIONS,
    SaveCancelButtonsComponent,


  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    BreadcrumbModule,
    NgxSpinnerModule,
    // NgSelectModule,
    RouterModule,
    // WizardModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      autoDismiss: true,
      closeButton: true,
      progressBar: true,
      progressAnimation:'increasing'

    }),
  ],

  exports: [
    NgxSpinnerComponent,
    BreadcrumbModule,
    MaterialModule,
    // FormsModule,
    // ReactiveFormsModule,
    // RouterModule,

    ...DECLARATIONS
  ],
  providers: [
    // AuthGuard,
    // UserRoleGuard,
    UserDetialService,
    // {
    // provide: HTTP_INTERCEPTORS,
    // useClass: ApiUrlInterceptorService,
    // multi: true
    // },
  ]
})
export class SharedModule { }
