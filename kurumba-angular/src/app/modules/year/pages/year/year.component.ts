import { ToastrService } from "ngx-toastr";
// angular
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

// third-party
import { MatTableDataSource } from "@angular/material/table";
import { finalize } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
// project
import { Year } from "src/app/shared/models/year.model";
import { OntypeValidationService } from "ontype-validations";
import { YearService } from "../../services/year.service";
@Component({
  selector: "app-year",
  templateUrl: "./year.component.html",
  styleUrls: ["./year.component.scss"],
})
export class YearComponent implements OnInit {
  // props
  yearListDataSource: MatTableDataSource<Year>;
  displayedColumns: string[] = ["Sn", "Year"];
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
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.fetchYearsList();
  }

  buildForm() {
    this.yearForm = this.fb.group({
      yearId: this.year.yearId,
      year: [this.year.year, [Validators.required]],
    });
  }

  fetchYearsList() {
    this.spinner.show();
    return this.yearService
      .getAllYears()
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe(
        (years) => {
          this.yearListDataSource = new MatTableDataSource(years);
        },
        (err) => {
          err = err.error.message
            ? this.toastr.error(err.error.message)
            : this.toastr.error("Error adding academic year list.");
        }
      );
  }

  // error block
  getYearErrorMessage() {
    return this.yearForm.controls["year"].hasError("required")
      ? "Academic year is required."
      : this.yearForm.controls["year"].hasError("maxLength")
      ? "Invalid year."
      : this.yearForm.controls["year"].hasError("minlength")
      ? "Required length is at least 2 characters."
      : "";
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
  onSave() {
    this.formSubmitted = true;
    if (this.yearForm.valid && this.formSubmitted) {
      this.spinner.show();
      this.yearService
        .saveYear(this.yearForm.value)
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe(
          (res) => {
            this.toastr.success("Academic year successFully created.");
            this.router.navigate(["../"], { relativeTo: this.route });
          },
          (err) => {
            err = err.error.message
              ? this.toastr.error(err.error.message)
              : this.toastr.error("Error adding academic year.");
          }
        );
    }
  }

  /* onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  } */
}
