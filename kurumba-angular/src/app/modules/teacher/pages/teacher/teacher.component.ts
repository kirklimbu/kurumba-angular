import { log } from 'util';
// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Third-party
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

// Project
import { StudentService } from 'src/app/modules/student/services/student.service';
import { TeacherService } from './../../services/teacher.service';
import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  // props
  displayedColumns: string[] = [
    'Sn',
    'Name',
    'Address',
    'Phone Num',
    'D.O.B',
    'Qualification',
    'Subject',
    'Action',
  ];
  teacherListDataSource: MatTableDataSource<any>;
  student: any;
  teacherList: any[] = [];

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService // private modal: NgbModal,
  ) {}

  ngOnInit(): void {
    this.fetchAllStudents();
  }

  studentForm(mode, id?) {
    const link: any = mode === 'add' ? 'addTeacher' : 'editTeacher/';
    this.router.navigate([link], {
      relativeTo: this.route,
      queryParams: { teacherId: id },
    });
  }

  onSearch() {}

  fetchAllStudents() {
    this.spinner.show();
    this.teacherService
      .getAllTeachers()
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe(
        (teachers) => {
          this.teacherList = teachers;
          this.teacherListDataSource = new MatTableDataSource(teachers);
        },
        (err) => {
          err = err.error.message
            ? this.toastr.error(err.error.message)
            : this.toastr.error('Error fetching teachers list.');
        }
      );
  }

  onDelete(teacher) {
    console.log('delete button pressed & teacher id' + JSON.stringify(teacher));
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width: '450px',
      data: {
        // passing data for child component(delete component)
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
      if (result === 'yes') {
        this.spinner.show();
        const idx = this.teacherList.indexOf(teacher);
        const sub = this.teacherService
          .deleteTeacher(teacher.teacherId)
          .subscribe(
            (data) => {
              this.teacherList[idx] = data.result;
              this.toastr.success('Teacher successfully deleted.');
              window.location.reload(); // temporary

              this.teacherList.splice(idx, 1);
              this.spinner.hide();
              sub.unsubscribe();
            },
            (err) => {
              err = err.error.message
                ? this.toastr.error(err.error.message)
                : this.toastr.error('Error while deleting the teacher.');
              sub.unsubscribe();
            }
          );
      }
    });
  }
}
