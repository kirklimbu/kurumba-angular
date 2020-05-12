import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/models/student.model';
import { Classes } from 'src/app/shared/models/classes.model';


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
        .post(`${this.API_URL}/createstudent`, { ...student })
      // .pipe(
      //   catchError(err => {
      //     return Observable.throw(err);
      //   })
      // )
    );
  }

  getStudentById(id): any {
    // let params = new HttpParams().set('studentId', id);

    console.log(' service ma gako id: ' + id);

    return (
      this.http
        .get(`${this.API_URL}/studentId?studentId=${id}`)
      // ,{params:params})
      // {
      // params: {
      //   studentId: id
      //   // id: id
      // },
      // })
      // .pipe(
      //   catchError(err => {
      //     return Observable.throw(err);
      //   })
      // )
    );
  }


  saveClass(classx : Classes): any {
  console.log('CLASS save service' + JSON.stringify(classx));

  return (
    this.http
      .post(`${this.API_URL}/create/class`, { ...classx })
    // .pipe(
    //   catchError(err => {
    //     return Observable.throw(err);
    //   })
    // )
  );
}

}

