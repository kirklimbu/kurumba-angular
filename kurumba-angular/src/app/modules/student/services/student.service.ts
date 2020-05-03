import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  // we can now access environment.apiUrl
  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
    // console.log(environment.production); // Logs false for default environment
  }

  getAllStudents(query): any {
    console.log('student service called ' + query);

    return (
      this.http
        // .get(`${this.API_URL}/student` )
        .get(this.API_URL +'/student')
        .pipe(
          // catchError(err => {
          //   // return Observable.throw(err);

          // })
        )
    );
  }
}

// `${environment.apiUrl}/auth/customer/mortgage?customerId=` + id,
