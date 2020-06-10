import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Classes } from 'src/app/shared/models/classes.model';
import { ExamService } from './../../services/exam.service';
import { Marks } from './../../../../shared/models/marks.model';
import { Student } from 'src/app/shared/models/student.model';
import { Subject } from 'src/app/shared/models/subject.model';
import { Terminal } from 'src/app/shared/models/terminal.model';
import { Year } from 'src/app/shared/models/year.model';
import { filter } from 'rxjs/operators';
import { log } from 'util';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss']
})
export class InternalComponent implements OnInit {

  // examForm: FormGroup;
  examForm: FormGroup;
  yearForm: FormGroup;
  terminalForm: FormGroup;
  studentForm: FormGroup;
  subjectForm: FormGroup;
  classForm: FormGroup;
  marksForm: FormGroup;
  yearList: Year[] = [];
  classList: Classes[] = [];
  terminalList: Terminal[] = [];
  studentList: Student[] = [];
  year: Year = new Year();
  marks: Marks = new Marks();
  student: Student = new Student();
  class: Classes = new Classes();
  subjectx: Subject = new Subject();
  terminal: Terminal = new Terminal();
  classxId: number;
  filteredClass: Classes[] = [];
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private examService: ExamService,
    private router: Router,
    private route: ActivatedRoute,
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
        classx: [this.classForm],
      }),
      this.subjectForm = this.fb.group({
        subjectId: [this.subjectx.subjectId],
        subject: [this.subjectx.subject],
        // fmPractical: [this.subjectx.fmPractical, [Validators.required]],
        // fmTheory: [this.subjectx.fmTheory, [Validators.required]],
      }),

      this.examForm = this.fb.group({
        marklist: this.fb.array([this.buildMarksForm()]),
        student: [],

        // student: [this.studentForm]

      });


  }


  buildMarksForm() {
    this.marksForm = this.fb.group({
      marksId: this.marks.marksId,
      prMarks: [this.marks.prMarks],
      thMarks: [this.marks.thMarks, [Validators.required]],
      subject: [this.marks.subject],
      terminal: [this.marks.terminal],
      year: [this.yearForm],
    });
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
        terminals => {
          this.terminalList = terminals;
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
    console.log('selected class id:  ' + JSON.stringify(this.classxId));

    // selected class subjects list
    this.filteredClass = this.classList.filter(f => f.classId === this.classxId);
    // const subjectx = this.filteredClass.forEach( f => f.subjectCollection)

    console.log('filtered class data: ' + JSON.stringify(this.filteredClass));
    // console.log('filtered subject data: ' + JSON.stringify(subjectx));


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

  onSave() {
    console.log('save clicked');
    this.submitted = true;

    const temp = this.examForm.value;
    console.log("form values: " + JSON.stringify(temp));


  }

  onCancel() {
    console.log('cancel clicked');
    this.router.navigate(['../../']);

  }



  // error block
  getYearErrorMessage() {

    return this.yearForm.controls['year'].hasError('required') ? 'Academic year is required.' : '';


  }

  getTerminalErrorMessage() {

    return this.terminalForm.controls['terminal'].hasError('required') ? 'Terminal is required.' : '';


  }


  getClassErrorMessage() {

    return this.classForm.controls['className'].hasError('required') ? 'Class is required.' : '';
  }

  getStudentErrorMessage() {

    return this.studentForm.controls['studentName'].hasError('required') ? 'Student is required.' : '';
  }


  //  getSubjectErrorMessage() {

  //     return this.yearForm.controls['year'].hasError('required') ? 'Academic year is required' : '';


  //   }


}
