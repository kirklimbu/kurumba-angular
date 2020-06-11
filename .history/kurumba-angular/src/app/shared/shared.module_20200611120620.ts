import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { CommonModule } from '@angular/common';
import { ConstantsComponent } from './components/constants/constants.component';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { ListPageTemplateComponent } from './components/list-page-template/list-page-template.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { NgxSpinnerComponent } from './components/ngx-spinner/ngx-spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { SaveCancelButtonsComponent } from './components/save-cancel-buttons/save-cancel-buttons.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SubMenuFilterPipe } from './pipes/sub-menu-filter.pipe';
import { TableTopBarComponent } from './components/table-top-bar/table-top-bar.component';
import { UserDetialService } from './services/user-detial.service';

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
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      autoDismiss: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing'

    }),
  ],
  entryComponents: [
    DeletePopupComponent
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
    { provide: ToastrService, useClass: NotificationService} 
  ]
})
export class SharedModule { }
