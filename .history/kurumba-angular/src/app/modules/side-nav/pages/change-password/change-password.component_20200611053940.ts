// Angular
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Password } from 'src/app/shared/models/password.model';

// Project


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
  password:Password

  panelOpenState = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

buildForm(){
  this.changePasswordForm= this.fb.group({
    confirmPass:[],
    newPass:[],
    oldPass:[],
  })
}
  onSave(){

  }

  onCancel(){

  }
}
