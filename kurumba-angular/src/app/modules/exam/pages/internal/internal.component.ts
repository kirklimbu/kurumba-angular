import { log } from 'util';
import { Subject } from 'src/app/shared/models/subject.model';
import { Marks } from './../../../../shared/models/marks.model';
import { ExamService } from './../../services/exam.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Year } from 'src/app/shared/models/year.model';
import { Terminal } from 'src/app/shared/models/terminal.model';
import { Student } from 'src/app/shared/models/student.model';
import { Classes } from 'src/app/shared/models/classes.model';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss']
})
export class InternalComponent implements OnInit {

  marksForm: FormGroup;
  examForm: FormGroup;
  yearForm: FormGroup;
  terminalForm: FormGroup;
  studentForm: FormGroup;
  subjectForm: FormGroup;
  classForm: FormGroup;
  yearList: Year[] = [];
  classList: Classes[] = [];
  terminalList: Terminal[] = [];
  studentList: Student[] = [];
  year: Year = new Year();
  marks: Marks = new Marks();
  student: Student = new Student();
  class: Classes = new Classes();
  subject: Subject = new Subject();
  terminal: Terminal = new Terminal();
  classxId: number;

  constructor(
    private fb: FormBuilder,
    private examService: ExamService
  ) { }

  ngOnInit(): void {
    this.fetchAllYear();
    this.fetchAllTerminals();
    this.fetchAllClasses();
    this.fetchAllStudents();
    this.buildForm();
  }

  buildForm() {

    this.yearForm = this.fb.group({
      yearId: this.year.yearId,
      year: [this.year.year, [Validators.required]]
    }),
      this.terminalForm = this.fb.group({
        terminalId: this.terminal.terminalId,
        terminal: [this.terminal.terminal, [Validators.required]],
      }),
      this.classForm = this.fb.group({
        classId: this.class.classId,
        className: [this.class.className, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      }),
      this.studentForm = this.fb.group({
        studentId: this.student.studentId,
        studentName: [this.student.name, [Validators.required]],
      }),

      this.marksForm = this.fb.group({
        marksId: this.marks.marksId,
        gradePoint: [this.marks.gradePoint, [Validators.required]],
        prGrade: [this.marks.prGrade, [Validators.required]],
        prMarks: [this.marks.prMarks, [Validators.required]],
      })
  }


  fetchAllYear() {
    this.examService.getAllYear()
      .subscribe(
        years => {
          this.yearList = years;
          console.log('year list ' + JSON.stringify(this.yearList));

        }, err => {
          console.error('server response error ' + JSON.stringify(err));

        }
      )

  }

  fetchAllTerminals() {
    this.examService.getAllTerminals()
      .subscribe(
        classes => {
          this.terminalList = classes;
          console.log('terminal list ' + JSON.stringify(this.terminalList));

        }, err => {
          console.error('server response error ' + JSON.stringify(err));

        }
      )

  }



  fetchAllClasses() {
    this.examService.getAllClasses()
      .subscribe(
        classes => {
          this.classList = classes;
          console.log('class data ' + JSON.stringify(this.classList));

        }, err => {
          console.error('server response error ' + JSON.stringify(err));

        }
      )

  }

  selectClass(id) {

    this.classxId = id.value;
    console.log('dfsfs' + id);

    this.examService.getAllStudentsByClassId(this.classxId)
      .subscribe(
        students => {
          this.studentList = students;
          console.log('student data ' + JSON.stringify(this.studentList));

        }, err => {
          console.error('server response error ' + JSON.stringify(err));

        }
      )
  }
  fetchAllStudents() {


  }



  // error block
  getYearErrorMessage() {

    return this.yearForm.controls['year'].hasError('required') ? 'Academic year is required' : '';


  }

  getTerminalErrorMessage() {

    return this.terminalForm.controls['terminal'].hasError('required') ? 'Terminal is required' : '';


  }


  getClassErrorMessage() {

    return this.classForm.controls['className'].hasError('required') ? 'Class is required' : '';
  }

  getStudentErrorMessage() {

    return this.studentForm.controls['studentName'].hasError('required') ? 'Student is required' : '';
  }


  //  getSubjectErrorMessage() {

  //     return this.yearForm.controls['year'].hasError('required') ? 'Academic year is required' : '';


  //   }


}
