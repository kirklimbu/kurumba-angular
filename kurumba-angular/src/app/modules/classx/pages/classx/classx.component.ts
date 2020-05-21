import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Classes } from 'src/app/shared/models/classes.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClassxService } from '../../services/classx.service';
@Component({
  selector: 'app-classx',
  templateUrl: './classx.component.html',
  styleUrls: ['./classx.component.scss']
})
export class ClassxComponent implements OnInit {

  displayedColumns: string[] = ['Sn', 'name', 'Action'];
  classListDataSource: MatTableDataSource<any>;
  classList: Classes[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private classxService: ClassxService

  ) { }

  ngOnInit(): void {
    this.fetchAllClasses();
  }

  fetchAllClasses() {
    this.classxService.getAllClasses()
      .subscribe(
        data => {
          this.spinner.hide();
          this.classListDataSource = new MatTableDataSource(data);
        },
        error => {
          console.log('student service called error ' + JSON.stringify(error));
          this.spinner.hide();
          // this.toastr.error('Error fetching Stocks');
        }
      )

  }

  classForm(mode, id?) {

    const link: any = mode === 'add' ? 'addClass' : 'editClass'

    this.router.navigate([link], { relativeTo: this.route });

  }

  onSearch() {

  }
  onCancel() {

  }
  onDelete(element) {

  }

}
