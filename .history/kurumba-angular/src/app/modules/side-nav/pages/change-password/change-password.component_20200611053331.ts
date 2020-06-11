import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

// newPassword & confirmPassword
export function confirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  // Props
  changePasswordForm:FormGroup;

  panelOpenState = false;

  constructor(
    private fb: FormBuilder,
    pr
  ) { }

  ngOnInit(): void {
  }

buildForm(){

  onSave(){

  }

  onCancel(){

  }
}
