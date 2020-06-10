import { log } from 'util';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class ExamService {

  // hitting backend
  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllYear(): any {

    return this.http.get(`${this.API_URL}/years`)
    // .pipe(
    //   catchError(err => {
    //     return Observable.throw(err);
    //   })
    // );
  }


  getAllTerminals(): any {

    return this.http.get(`${this.API_URL}/terminals`)
    // .pipe(
    //   catchError(err => {

    //     return Observable.throw(err);
    //   })
    // );
  }

  getAllClasses(): any {
    console.log('calling class service: ');

    return this.http.get(`${this.API_URL}/classes`)
    // .pipe(
    //   catchError(err => {

    //     return Observable.throw(err);
    //   })
    // );
  }

  getAllStudentsByClassId(id: number): any {
    console.log('calling class service' +id);

    return this.http.get(`${this.API_URL}/class/studentlist?classId=` + id)
    // .pipe(
    //   catchError(err => {

    //     return Observable.throw(err);
    //   })
    // );
  }
}

