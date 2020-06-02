// Angular
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Third party
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { OntypeValidationService } from 'ontype-validations';
// Project
import { TeacherService } from '../../services/teacher.service';
import { TeacherSubject } from 'src/app/shared/models/teacher-subject.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-teacher-subject',
  templateUrl: './teacher-subject.component.html',
  styleUrls: ['./teacher-subject.component.scss']
})
export class TeacherSubjectComponent implements OnInit {

  yearListDataSource: MatTableDataSource<TeacherSubject>;
  displayedColumns: string[] = ['Sn', 'Subject'];
  teacherSubject: TeacherSubject = new TeacherSubject();

  formSubmitted = false;
  teacherSubjectForm: FormGroup;

  constructor(
    private onTypeValidateService: OntypeValidationService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.fetchTeacherSubjectList();
  }


  buildForm() {

    this.teacherSubjectForm = this.fb.group({
      subjectId: this.teacherSubject.subjectId,
      subject: [this.teacherSubject.subject, [Validators.required]]
    });
  }

  // error block
  getSujbectErrorMessage() {
    return this.teacherSubjectForm.controls.subject.hasError('required') ? 'S ubject is required' :
      this.teacherSubjectForm.controls.subject.hasError('maxLength') ? 'Invalid subject' :
        this.teacherSubjectForm.controls.subject.hasError('minlength') ? 'Required length is at least 2 characters' :
          '';
  }
  // input copy/ paste validation
  validate(event, type?: string): any {

    if (this.onTypeValidateService.validate(event, type)) {
      return true;
    }
    else {
      return false;
    }
  }

  onPaste(event: ClipboardEvent, type?: string): any {
    if (this.onTypeValidateService.validateOnPaste(event, type)) {
      return true;
    }
    return false;
  }
  onSave() {
    this.formSubmitted = true;
    this.spinner.show();
    if (this.teacherSubjectForm.valid) {
      this.teacherService.saveTeacherSubject(this.teacherSubjectForm.value)
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe(
          res => {
            // this.toastr.success('Tracker SuccessFully Created.');
            // this.router.navigate(['/teacher/teacherSubject'], { relativeTo: this.route });
            window.location.reload();
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
    console.log('cacncel clicked');

    this.router.navigate(['../'], { relativeTo: this.route });

  }

  fetchTeacherSubjectList() {
    return this.teacherService.getAllTeacherSubjects()
      .subscribe(
        teacherSubjectList => {
          console.log('subject list ' + JSON.stringify(teacherSubjectList));

          this.yearListDataSource = new MatTableDataSource(teacherSubjectList);
        },
        err => {
          console.log('save server error' + JSON.stringify(err));

          // if (err.error.errors[0].defaultMessage) {
          // this.toastr.error(err.error.errors[0].defaultMessage);
        });
  }

}
