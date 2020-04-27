import { MaterialModule } from './../../../.history/src/app/shared/material/material.module_20200428004311';
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


@NgModule({
  declarations: [ActionButtonsComponent, DeletePopupComponent, FormGroupComponent, ListPageTemplateComponent, NgxSpinnerComponent, PageHeaderComponent, SaveCancelButtonsComponent, TableTopBarComponent, ConstantsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ]
})
export class SharedModule { }
