import { ActivatedRoute, Router } from '@angular/router';
// Angular
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// Third-party
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { CheckPattern } from 'src/app/shared/constants/check-pattern.model';
import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { OntypeValidationService } from 'ontype-validations';
import { Teacher } from 'src/app/shared/models/teacher.model';
import { TeacherService } from '../../services/teacher.service';
import { TeacherSubject } from 'src/app/shared/models/teacher-subject.model';
// Rxjs
import { finalize } from 'rxjs/operators';

// Project


@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

  // props
  checkPattern: CheckPattern = new CheckPattern();
  teacherForm: FormGroup;
  teacherSubjectForm: FormGroup;
  teacher = new Teacher();
  teacherSubject = new TeacherSubject();
  formSubmitted = false;
  studentId: number;
  mode = 'add';
  teacherSubjectList: TeacherSubject[] = [];

  // test
  show = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private teacherService: TeacherService,
    private onTypeValidateService: OntypeValidationService,

    private modal: NgbModal,


  ) { }

  ngOnInit(): void {

    this.fetchAllTeacherSubjects();
    this.getParamsFromUrl();
    this.buildteacherForm();
    // this.buildTeacherSubjectForm(subject);
  }

  getParamsFromUrl() {

    this.route.queryParams.subscribe(params => {
      console.log('query param value ' + JSON.stringify(params));

      this.studentId = (params.studentId);

      // if (this.studentId != null && this.studentId) {
      //   this.mode = 'edit';
      //   this.spinner.show();
      //   this.teacherService.getStudentById(this.studentId)
      //     .pipe(finalize(() => this.spinner.hide()))
      //     .subscribe(
      //       data => {
      //         console.log('callig edit build form');
      //         this.student = data;
      //         this.buildteacherForm();

      //       },
      //       err => {
      //         console.log('server error ' + JSON.stringify(err));

      //         // this.toastr.error('Unable to Fetch SIM Detail.');
      //       }
      //     );

      // } else {
      //   console.log('inside else block build ' + this.mode);

      //   this.buildteacherForm();
      // }
    });
  }


  buildteacherForm() {
    console.log('student build form called');

    this.teacherForm = this.fb.group({
      teacherId: [this.teacher.teacherId],
      name: [this.teacher.name, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      qualification: [this.teacher.qualification, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      address: [this.teacher.address, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      phoneNo: [this.teacher.phoneNo, [Validators.required, Validators.minLength(10)]],
      dob: [this.teacher.dob, [Validators.required]],
      // subjectList: this.fb.array([]),
      subjectList:[this.teacher.subjectList]

    });
    // this.addSubjects();
  }

  // get subjectList() {
  //   return this.teacherForm.get('subjectList')['controls'];
  // }

  // buildTeacherSubjectForm() {

  //   return this.fb.group({
  //     subject: [this.teacherSubject.subject]
  //   });

  // }

  // addSubjects() {
  //   const subjects = this.teacherForm.controls.subjectList as FormArray;
  //   subjects.push(this.fb.group({
  //     subject: [this.teacherSubject.subject],

  //   }));
  // }



  get name() {
    return this.teacherForm.controls.name;
  }

  get qualification() {
    return this.teacherForm.controls.qualification;
  }

  get address() {
    return this.teacherForm.controls.address;
  }

  get phoneNo() {
    return this.teacherForm.controls.phoneNo;
  }


  get dob() {
    return this.teacherForm.controls.dob;
  }


  fetchAllTeacherSubjects() {

    // this.spinner.show();
    this.teacherService.getAllTeacherSubjects()
      .subscribe(
        teacheSubjectList => {
          // this.spinner.hide();
          this.teacherSubjectList = teacheSubjectList;
        },
        () => {
          this.spinner.hide();
          // this.toastr.error('Error fetching Stocks');
        }
      );
  }

  onSave(mode) {
    console.log('save method called ');
    // console.log('student value ' + JSON.stringify(this.teacherForm.value));

    this.formSubmitted = true;
    if (this.teacherForm.valid) {
      this.spinner.show();
      this.teacherService.teacherService(this.teacherForm.value)
        // .pipe(finalize(() => this.spinner.hide()))
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
      console.log('invalid form');

    }
  }

  onCancel() {

    const link: any = this.mode === 'add' ? '../' : '../';
    this.router.navigate([link], { relativeTo: this.route });
  }

  // input copy/ paste validation
  validate(event, type?: string): any {

    if (this.onTypeValidateService.validate(event, type)) {
      return true;
    } else {
      return false;
    }
  }

  onPaste(event: ClipboardEvent, type?: string): any {
    if (this.onTypeValidateService.validateOnPaste(event, type)) {
      return true;
    }
    return false;
  }


  // error message block
  getNameErrorMessage() {
    return this.teacherForm.controls.name.hasError('required') ? 'Teacher name is required.' :
      this.teacherForm.controls.name.hasError('maxLength') ? 'Invalid name.' :
        this.teacherForm.controls.name.hasError('minlength') ? 'Name must be atleast of 2 characters.' :
          '';
  }

  getaddressErrorMessage() {
    return this.teacherForm.controls.address.hasError('required') ? 'Teacher address is required.' :
      this.teacherForm.controls.address.hasError('maxLength') ? 'Invalid address.' :
        this.teacherForm.controls.address.hasError('minlength') ? 'Address must be atleast of 2 characters.' :
          '';
  }
  getphoneErrorMessage() {
    return this.teacherForm.controls.phoneNo.hasError('required') ? 'Mobile num is required.' :
      this.teacherForm.controls.phoneNo.hasError('maxLength') ? 'Invalid phone num.' :
        this.teacherForm.controls.phoneNo.hasError('minlength') ? 'Invalid phone num.' :
          '';
  }

  getqualificationErrorMessage() {
    return this.teacherForm.controls.qualification.hasError('required') ? 'Teacher  roll num is required.' :
      this.teacherForm.controls.qualification.hasError('maxLength') ? 'Invalid roll num.' :
        this.teacherForm.controls.qualification.hasError('minlength') ? 'Roll num must be atleast of 1 character.' :
          '';
  }

  getDobErrorMessage() {
    return this.teacherForm.controls.dob.hasError('required') ? 'Teacher dob is required.' : '';
  }

  getSubjectErrorMessage() {
    return this.teacherForm.controls['subjectList'].hasError('required') ? 'Subject is required.' : '';
  }


  // test
  onDelete(sim) {
    // console.log('model values: ' + sim);
    const id = 100;

    const modal: NgbModalRef = this.modal.open(DeletePopupComponent);
    modal.result.then(
      yes => {



      }, no => {

      }
    );
  }
  // test
}
