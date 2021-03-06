import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { LoginService } from "./../../services/login.service";
import { NgxSpinnerComponent } from "src/app/shared/components/ngx-spinner/ngx-spinner.component";
import { Router } from "@angular/router";
import { User } from "src/app/shared/models/user.model";
import { log } from "util";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  loginForm: FormGroup;
  loginInvalid: boolean = false;
  formSubmitted = false;
  errorMsg = "";
  hide = true;
  show = true;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      username: [this.user.username, [Validators.required]],
      password: [this.user.password, [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  get username() {
    return this.loginForm.get("username");
  }
  get pwd() {
    return this.loginForm.get("password");
  }

  login() {
    console.log("clicked");
    this.formSubmitted = true;
    this.loading = true;
    if (this.loginForm.valid && this.formSubmitted) {
      this.loginService
        .login(this.f.username.value, this.f.password.value)
        .subscribe(
          (res) => {
            this.router.navigate(["/school/home"]);
          },
          (err) => {
            console.log("login error " + JSON.stringify(err));

            err.status == 401
              ? (this.errorMsg = err.error.message)
              : (this.errorMsg = "Login Failed");
            /*  this.loginInvalid = true;
            if (err.status == 401) {
              this.errorMsg = err.error.message;
            } else {
              console.log("error " + JSON.stringify(err));

              this.loginInvalid = true;
              this.errorMsg = "Login Failed";
            } */
          }
        );
    }
  }

  /* Error messages */
  getUsernameErrorMsg() {
    return this.loginForm.controls.username.hasError("required")
      ? "Username is required."
      : "";
  }
  getPassErrorMsg() {
    return this.loginForm.controls.password.hasError("required")
      ? "Password is required."
      : "";
  }
}
