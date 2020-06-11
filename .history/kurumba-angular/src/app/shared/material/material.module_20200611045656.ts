import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgModule } from '@angular/core';

const material = [
  MatTableModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDatepickerModule,
  // MatMomentDateModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSelectModule,
  MatPaginatorModule,
  MatSortModule,
  MatDividerModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatExpansionModule

];
@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }
