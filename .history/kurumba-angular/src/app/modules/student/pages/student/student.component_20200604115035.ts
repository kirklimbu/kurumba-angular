import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { StudentService } from '../../services/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['Sn', 'name', 'class', 'rollno', 'address', 'dob', 'fatherName', 'motherName', 'phoneNum', 'Action'];
  studentListDataSource: MatTableDataSource<any>;
  student: any;


  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
    // private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.fetchAllStudents();
  }

  studentForm(mode, id?) {

    const link: any = mode === 'add' ? 'addStudent' : 'editStudent/';
    this.router.navigate([link], { relativeTo: this.route, queryParams: { studentId: id } });


  }


  onSearch() {

  }

  fetchAllStudents() {

    const query: boolean = false;
    this.studentService.getAllStudents(query)
      .subscribe(
        data => {
          console.log('students list' + JSON.stringify(error));

          this.spinner.hide();
          this.studentListDataSource = new MatTableDataSource(data);

        },
        error => {
          console.log('student service called error ' + JSON.stringify(error));
          this.spinner.hide();
          // this.toastr.error('Error fetching Stocks');
        }
      )

  }

  onDelete(student) {

    console.log('delete button pressed' + JSON.stringify(student));
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width: '450px',
      data: {

      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ' + result);
      if (result === 'Yes') {
        console.log('yes');

      } else {
        console.log('no');

      }
    });


  }
}
