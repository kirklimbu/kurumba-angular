import { ActivatedRoute, Router } from '@angular/router';
// Angular
import { Component, OnInit } from '@angular/core';

import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';
import { MatDialog } from '@angular/material/dialog';
// Third-party
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
// Project
import { StudentService } from 'src/app/modules/student/services/student.service';
import { TeacherService } from './../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  // props
  displayedColumns: string[] = ['Sn', 'Name', 'Address', 'Phone Num', 'D.O.B', 'Qualification','Subject', 'Action'];
  teacherListDataSource: MatTableDataSource<any>;
  student: any;
  teacher: any[] = [];


  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
    // private toastr: ToastrService
    // private modal: NgbModal,

  ) { }

  ngOnInit(): void {

    this.fetchAllStudents();
  }

  studentForm(mode, id?) {

    const link: any = mode === 'add' ? 'addTeacher' : 'editTeacher/';
    this.router.navigate([link], { relativeTo: this.route, queryParams: { teacherId: id } });


  }


  onSearch() {

  }

  fetchAllStudents() {

    this.teacherService.getAllTeachers()
      .subscribe(
        teachers => {
          this.teacher = teachers;
          // console.log('students from server '+JSON.stringify(data));
          // console.log('students from server '+this.teacher);

          this.spinner.hide();
          this.teacherListDataSource = new MatTableDataSource(teachers);

        },
        error => {
          console.log('student service called error ' + JSON.stringify(error));
          this.spinner.hide();
          // this.toastr.error('Error fetching Stocks');
        }
      );


  }
  onDelete(index) {
    console.log('delete called' + JSON.stringify(index));

    console.log('delete button pressed' + JSON.stringify(index));
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width: '450px',
      data: {

      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ' + result);
      if (result === 'Yes') {
        console.log('yes');
        this.spinner.show();
        const idx = this.simList.indexOf(sim);
        const sub = this.simService.deleteSim(sim.id)
          .subscribe(
            data => {
              this.simList[idx] = data.result;
              this.toastr.success('SIM successfully deleted.');
              this.simList.splice(idx, 1);
              this.spinner.hide();
              sub.unsubscribe();
            }, err => {
              this.toastr.error('Error while deleting the SIM.')
              sub.unsubscribe();
            }

          )
      } else {
        console.log('no');

      }
    });
  }

}
