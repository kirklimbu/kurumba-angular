import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Year } from 'src/app/shared/models/year.model';
import { OntypeValidationService } from 'ontype-validations';
import { YearService } from '../../services/year.service';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {

  yearListDataSource: MatTableDataSource<Year>;
  displayedColumns: string[] = ['Sn', 'Year'];
  year: Year = new Year();
  formSubmitted = false;


  yearForm: FormGroup;
  constructor(
    private onTypeValidateService: OntypeValidationService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private yearService: YearService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }


  buildForm() {

    this.yearForm = this.fb.group({
      yearId: this.year.yearId,
      year: [this.year.year, [Validators.required]]
    })
  }

  // error block
  getYearErrorMessage() {
    return this.yearForm.controls['year'].hasError('required') ? 'Academic year is required' :
      this.yearForm.controls['year'].hasError('maxLength') ? 'Invalid year' :
        this.yearForm.controls['year'].hasError('minlength') ? 'Required length is at least 2 characters' :
          '';
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
  onSave() {
    this.formSubmitted = true;
    this.spinner.show();
    if (this.yearForm.valid) {
      this.yearService.saveYear(this.yearForm.value)
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
    console.log('cacncel clicked');

    this.router.navigate(['../'], { relativeTo: this.route });

  }

}
