import { FormGroup } from '@angular/forms';

export class CheckPattern {

  errorPattern: any;
  errorPatternMsg: string;
  passwordPattern: string;
  passwordPatternMsg: string;
  passwordMismatchMsg: string;


  emailPatternError: any;
  emailPatternErrorMsg: string;

  constructor() {
    this.errorPattern = /^[^<>/=;]+$/;

    this.passwordPattern = '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$';
    this.passwordPatternMsg = 'Password must contain atleast of one digit, one capital letter & one special character';

    // this.passwordMismatchMsg = "New password and confirm password donot match.'";

    // testing for beginning white space
    // this.errorPattern = /^[^ ][\w\W ]*[^ ]/;
    this.errorPatternMsg = 'The operators < > / = ; cannot be used';

    this.emailPatternError = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.emailPatternErrorMsg = 'Email Should be of format \'example@mail.com\'';
  }

  //  ConfirmedValidator(controlName: string, matchingControlName: string) {
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
  //   }
  // }
}
