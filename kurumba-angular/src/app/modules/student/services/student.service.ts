import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/models/student.model';

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
        .get(`${this.API_URL}/student`)
        // .get(this.API_URL +'/student')
        .pipe(
          // catchError(err => {
          //   // return Observable.throw(err);

          // })
        )
    );
  }

  getAllClasses(): any {

    return (
      this.http
        .get(`${this.API_URL}/classes`)
        // .get(this.API_URL +'/classes')
        .pipe(
          // catchError(err => {
          //   // return Observable.throw(err);

          // })
        )
    );
  }

  saveStudent(student: Student): any {
    console.log('student save service' + student);

    return (
      this.http
        .post('/createstudent', { ...student })
      // .pipe(
      //   catchError(err => {
      //     return Observable.throw(err);
      //   })
      // )
    );
  }

  getStudentById(id): any {
    console.log(' service ma gako id ' +id);

    return (
      this.http
        .get(`/studentId?studentId=`, {
          params: {
            studentId: id
            // id: id
          },
        })
      // .pipe(
      //   catchError(err => {
      //     return Observable.throw(err);
      //   })
      // )
    );
  }

}

