import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Classes } from 'src/app/shared/models/classes.model';
import { ClassxService } from '../../services/classx.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { OntypeValidationService } from 'ontype-validations';
import { Subject } from 'src/app/shared/models/subject.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss']
})
export class ClassFormComponent implements OnInit {
  class: Classes = new Classes();
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
    private classxService: ClassxService,
    private onTypeValidateService: OntypeValidationService

  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    console.log('build form called');

    this.classForm = this.fb.group({
      classId: this.class.classId,
      className: [this.class.className, [Validators.required]],
      subjectCollection: this.fb.array([this.buildSubjectForm()])
    })
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
    })
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
    this.spinner.show();

    console.log('class form values ' + JSON.stringify(this.classForm.value));
    if (this.classForm.valid) {

      this.classxService.saveClass(this.classForm.value)
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
