// Angular
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';
// import { OntypeValidationService } from 'ontype-validations';
// Third-party
import { Password } from 'src/app/shared/models/password.model';
import { SideNavService } from './../../services/side-nav.service';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';

// Project


// newPassword & confirmPassword
// export function confirmedValidator(controlName: string, matchingControlName: string) {

//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];
//     if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
//       return;
//     }
//     if (control.value !== matchingControl.value) {
//       matchingControl.setErrors({ confirmedValidator: true });
//     } else {
//       matchingControl.setErrors(null);
//     }
//   };
// }

// test
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  // Props
  changePasswordForm: FormGroup;
  password = new Password();

  panelOpenState = false;
  showConfirmPassword = false;
  showCurrentPassword = false;
  showNewPassword = false;
  submitted = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private sideNavService: SideNavService,


  ) { }

  ngOnInit(): void {
    this.buildForm();
  }


  buildForm() {
    this.changePasswordForm = this.fb.group({
      newPass: [this.password.newPass, [Validators.required]],
      oldPass: [this.password.oldPass, [Validators.required]],
      confirmPass: [this.password.confirmPass, [Validators.required]],

    },
      {
        validator: confirmedValidator('newPass', 'confirmPass')
      });
  }

  get newPassword() {
    return this.changePasswordForm.get('newPass');

  } get oldPassword() {
    return this.changePasswordForm.get('oldPass');

  } get confirmPassword() {
    return this.changePasswordForm.get('confirmPass');
  }

  onSave() {
    console.log('change password form values: ' + JSON.stringify(this.changePasswordForm.value));

    if (this.changePasswordForm.valid) {

      this.submitted = true;
      this.sideNavService.saveNewPassword(this.changePasswordForm.value)
        .subscribe(response => {
          this.toastr.success('Password changed successfully.');
          window.location.reload();

        }, err => {
          this.toastr.error('Error in changing password.');
        });

    } else {
      console.log('invalid form');

    }

  }

  onCancel() {

  }

  // input copy/ paste validation
  //  validate(event, type?: string): any {

  //   if (this.onTypeValidateService.validate(event, type))
  //     return true;
  //   else
  //     return false;
  // }

  // onPaste(event: ClipboardEvent, type?: string): any {
  //   if (this.onTypeValidateService.validateOnPaste(event, type)) {
  //     return true;
  //   }
  //   return false;
  // }


  // error
  getOldPassErrorMessage() {
    return this.changePasswordForm.controls['oldPass'].hasError('required') ? 'Current Password is required.' : '';
  }

  getNewPassErrorMessage() {
    return this.changePasswordForm.controls['newPass'].hasError('required') ? 'New Password  is required.' : '';
  }

  getConfirmPassErrorMessage() {
    return this.changePasswordForm.controls['confirmPass'].hasError('required') ? 'Confirm Password  is required.' : '';
  }
}
