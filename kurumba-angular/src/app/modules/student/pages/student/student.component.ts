import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['Sn', 'name', 'class', 'rollno', 'address', 'dob', 'fatherName', 'motherName', 'phoneNum', 'Action'];
  studentListDataSource: MatTableDataSource<any>;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fetchAllStudents();
  }

  studentForm(mode, id?) {
    console.log('mode ' + mode);

    const link: any = mode === 'add' ? 'addStudent' : 'editStudent/' + id;
    this.router.navigate([link], { relativeTo: this.route });


  }

  onSearch() {

  }

  fetchAllStudents() {

    const query: boolean = false;
    console.log('calling student service :');
    this.studentService.getAllStudents(query)
      .subscribe(
        data => {
          // this.spinner.hide();
          this.studentListDataSource = new MatTableDataSource(data);
          // this.studentList = JSON.parse(data);
          console.log('server student list ' + this.studentListDataSource);

        },
        error => {
          console.log('student service called error ' + JSON.stringify(error));  // start from here

          // this.spinner.hide();
          // this.toastr.error('Error fetching Stocks');
        }
      )

  }

  onDelete(){
    console.log('delete button pressed');

  }
}
