import { Console } from 'console';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Password } from 'src/app/shared/models/password.model';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  API_URL = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) {


  }

  getTotalCount(): any {
    console.log('calling total service');

    return this.http.get(`${this.API_URL}/totalcount`)
      .pipe(
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }

  saveNewPassword(password: Password): any {
    console.log('calling change password servicec');
    return this.http.post(`${this.API_URL}/resetpassword`, { ...password })
      .pipe(
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }
}
