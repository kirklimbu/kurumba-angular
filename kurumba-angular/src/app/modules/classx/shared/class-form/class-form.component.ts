import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Classes } from 'src/app/shared/models/classes.model';
import { ClassxService } from '../../services/classx.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { OntypeValidationService } from 'ontype-validations';
import { Subject } from 'src/app/shared/models/subject.model';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss'],
})
export class ClassFormComponent implements OnInit {
  class: Classes = new Classes();
  fClass: Classes = new Classes();
  subject: Subject = new Subject();
  classForm: FormGroup;
  formSubmitted: true;
  getErrorMessage = '';
  mode = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private classxService: ClassxService,
    private onTypeValidateService: OntypeValidationService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getParamsFromUrl();
  }

  getParamsFromUrl() {
    this.route.params.subscribe((params) => {
      const classId = params.id;
      console.log('param class id ' + classId);

      if (classId != null && classId) {
        console.log('class id ' + classId);

        this.mode = 'edit';
        this.spinner.show();
        /* replace this code with getClassById() */
        this.classxService
          .getAllClasses()
          .pipe(finalize(() => this.spinner.hide()))

          .subscribe((res) => {
            console.log('edit class data' + JSON.stringify(res));

            this.class = res.filter((f) => f.classId == classId);
            console.log('filtered class ' + JSON.stringify(this.class));

            this.buildForm();
          }),
          (err) => {
            this.toastr.error('Error fetching classes');
          };
      } else {
        this.buildForm();
      }
    });
  }

  buildForm() {
    console.log('build form called');

    if (this.mode === 'add') {
      console.log('inside class add');

      this.classForm = this.fb.group({
        classId: this.class.classId,
        className: [this.class.className, [Validators.required]],
        subjectCollection: this.fb.array([this.buildSubjectForm()]),
      });
    } else {
      console.log(this.class);

      this.classForm = this.fb.group({
        classId: this.class.classId,
        className: [this.class.className, [Validators.required]],
        subjectCollection: this.fb.array([this.buildSubjectForm()]),
      });
    }
  }

  get className() {
    return this.classForm.controls.className;
  }

  subjectCollection(): FormArray {
    return this.classForm.get('subjectCollection') as FormArray;
  }

  buildSubjectForm() {
    console.log('subject build form called');

    return this.fb.group({
      subjectId: this.subject.subjectId,
      subject: [this.subject.subject, [Validators.required]],
      fmTheory: [this.subject.fmTheory],
      fmPractical: [this.subject.fmPractical],
    });
  }

  get subjectName() {
    return this.classForm.controls.subject;
  }

  addSubject() {
    this.subjectCollection().push(this.buildSubjectForm());
  }

  removeSubject(i: number) {
    this.subjectCollection().removeAt(i);
  }

  onSave() {
    this.formSubmitted = true;

    console.log('class form values ' + JSON.stringify(this.classForm.value));
    if (this.classForm.valid && this.formSubmitted) {
      this.spinner.show();
      this.classxService
        .saveClass(this.classForm.value)
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe(
          (res) => {
            this.toastr.success('Class SuccessFully Added.');
            this.router.navigate(['../'], { relativeTo: this.route });
          },
          (err) => {
            console.log('save server error' + JSON.stringify(err));

            err = err.error.message
              ? this.toastr.error(err.error.message)
              : this.toastr.error('Error adding new class.');
          }
        );
    }
  }

  onCancel() {
    const link: any = this.mode === 'add' ? '../' : '../../';
    this.router.navigate([link], { relativeTo: this.route });
  }

  // input copy/ paste validation
  validate(event, type?: string): any {
    if (this.onTypeValidateService.validate(event, type)) return true;
    else return false;
  }

  onPaste(event: ClipboardEvent, type?: string): any {
    if (this.onTypeValidateService.validateOnPaste(event, type)) {
      return true;
    }
    return false;
  }
}
