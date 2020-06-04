import { Observable, pipe, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from './../../../shared/models/subject.model';
import { Teacher } from 'src/app/shared/models/teacher.model';
import { TeacherSubject } from 'src/app/shared/models/teacher-subject.model';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  //  backend api-url
  API_URL = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  saveTeacherSubject(subject: TeacherSubject): any {
    console.log('teacher subject service called ' + JSON.stringify(subject));

    return this.http.post(`${this.API_URL}/create/teachersub`, { ...subject })
    // .pipe(
    //   catchError(err => {
    //     return Observable.throw(err);
    //   })
    // )

  }

  getAllTeacherSubjects(): any {
    return this.http.get(`${this.API_URL}/subjectteacher`)
    // .pipe(
    //   catchError(err => {
    //     return Observable.throw(err);
    //   })
    // )

  } getAllTeachers(): any {
    return this.http.get(`${this.API_URL}/teachers`)
    // .pipe(
    //   catchError(err => {
    //     return Observable.throw(err);
    //   })
    // )

  }

  teacherService(teacher: Teacher): any {
    console.log('save teacher service called ' + JSON.stringify(teacher));

    return this.http.post(`${this.API_URL}/createteacher`, { ...teacher })
    // .pipe(
    //   catchError(err => {
    //     return Observable.throw(err);
    //   })
    // )

  }

  deleteTeacher(id: Teacher): any {
    console.log('teacher id to be deleted ' + id);
    return this.http.delete(`${this.API_URL}/delete/teacher?teacherId=${id}`)
    .pipe(
      catchError(err =>{
        
      })
    )
  }
}
