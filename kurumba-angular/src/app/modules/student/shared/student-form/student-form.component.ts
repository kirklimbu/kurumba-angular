import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { StudentService } from './../../services/student.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/student.model';
import { CheckPattern } from 'src/app/shared/constants/check-pattern.model';
import { OntypeValidationService } from 'ontype-validations';
import { Classes } from 'src/app/shared/models/classes.model';
import { finalize, filter } from 'rxjs/operators';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  checkPattern: CheckPattern = new CheckPattern();
  studentForm: FormGroup;
  student = new Student();
  class = new Classes();
  formSubmitted = true;
  classesList;
  studentId: number;
  mode = 'add';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private studentService: StudentService,
    private onTypeValidateService: OntypeValidationService

  ) { }

  ngOnInit(): void {
    // this.buildStudentForm();

    // this.route.queryParams
    // .filter(params=> params.studentId)
    // .subscribe(params => {
    // console.log('paramas id ' + params);

    // const userId = params['studentId'];

    // const id = params.studentId;
    // console.log('query paramas id ' + id);
    // });

    // this.route.queryParams.subscribe(
    //   params => {
    //     console.log('paramQuery ' + JSON.stringify(params));
    //     console.log('paramQuery NOT STRINGIFY' + params);

    //   }
    // )





    this.fetchAllClasses();
    this.getParamsFromUrl();
    this.buildStudentForm();
  }

  getParamsFromUrl() {

    this.route.queryParams.subscribe(params => {
      console.log('query param value ' + JSON.stringify(params));

      this.studentId = (params.studentId);

      if (this.studentId != null && this.studentId) {
        this.mode = 'edit';
        this.spinner.show();
        this.studentService.getStudentById(this.studentId)
          .pipe(finalize(() => this.spinner.hide()))
          .subscribe(
            data => {
              console.log('callig edit build form');
              this.student = data;
              this.buildStudentForm();

            },
            err => {
              console.log('server error ' + JSON.stringify(err));

              // this.toastr.error('Unable to Fetch SIM Detail.');
            }
          );

      } else {
        console.log('inside else block build ' + this.mode);

        this.buildStudentForm();
      }
    });
  }


  buildStudentForm() {

    if (this.mode === 'add') {
      this.studentForm = this.fb.group({
        studentId: this.student.studentId,
        name: [this.student.name, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        fatherName: [this.student.fatherName, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        motherName: [this.student.motherName, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        address: [this.student.address, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        phoneNo: [this.student.phoneNo, [Validators.required, Validators.minLength(10)]],
        rollNo: [this.student.rollNo, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
        dob: [this.student.dob, [Validators.required]],
        classx: this.fb.array([this.buildClassForm()]),

      });
    } else {
      this.studentForm = this.fb.group({
        studentId: this.student.studentId,
        name: [this.student.name, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        fatherName: [this.student.fatherName, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        motherName: [this.student.motherName, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        address: [this.student.address, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        phoneNo: [this.student.phoneNo, [Validators.required, Validators.minLength(10)]],
        rollNo: [this.student.rollNo, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
        dob: [this.student.dob, [Validators.required]],
        classx: this.fb.array([]),
      });
      // this.setclassx();
    }
  }

  buildClassForm() {
    return this.fb.group({
      classId: [this.class.className],
      className: [this.class.className, [Validators.required]],

    });

  }

  // setclassx() {
  //   let control = <FormArray>this.studentForm.controls.classx;
  //   this.class.classx.forEach(x => {
  //     control.push(this.fb.group(x));
  //   })
  // }

  get classx() {
    return this.studentForm.get('classx')['controls'];
  }


  get name() {
    return this.studentForm.controls.name;
  } get fatherName() {
    return this.studentForm.controls.fatherName;
  } get motherName() {
    return this.studentForm.controls.motherName;
  } get address() {
    return this.studentForm.controls.address;
  } get phoneNo() {
    return this.studentForm.controls.phoneNo;
  } get rollNo() {
    return this.studentForm.controls.rollNo;
  } get dob() {
    return this.studentForm.controls.dob;
  }


  fetchAllClasses() {

    this.spinner.show();
    this.studentService.getAllClasses()
      .subscribe(
        data => {
          this.spinner.hide();
          this.classesList = data;
        },
        () => {
          this.spinner.hide();
          // this.toastr.error('Error fetching Stocks');
        }
      )
  }

  onSave(mode) {
    console.log('save method called ');
    console.log('student value ' + JSON.stringify(this.studentForm.value));

    this.formSubmitted = true;
    if (this.studentForm.valid) {
      this.spinner.show();
      if (mode === 'add') {

        console.log('student form values ' + this.studentForm.value);
        this.studentService.saveStudent(this.studentForm.value)
          .pipe(finalize(() => this.spinner.hide()))
          .subscribe(
            res => {
              // this.toastr.success('Tracker SuccessFully Created.');
              this.router.navigate(['../'], { relativeTo: this.route });
            },
            err => {
              console.log('save server error' + JSON.stringify(err));

              // if (err.error.errors[0].defaultMessage) {
              // this.toastr.error(err.error.errors[0].defaultMessage);
            }
            // else {
            // this.toastr.error('Error adding Tracker details.');
            // }
            // }
          );
      } else {
        console.log('update block');

      }

    }


  }

  onCancel() {

    const link: any = this.mode === 'add' ? '../' : '../../';
    this.router.navigate([link], { relativeTo: this.route });
  }

  // input copy/ paste validation
  validate(event, type?: string): any {

    if (this.onTypeValidateService.validate(event, type))
      return true;
    else
      return false;
  }

  onPaste(event: ClipboardEvent, type?: string): any {
    if (this.onTypeValidateService.validateOnPaste(event, type)) {
      return true;
    }
    return false;
  }

}
