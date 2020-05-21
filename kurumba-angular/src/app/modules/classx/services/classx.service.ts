import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Classes } from 'src/app/shared/models/classes.model';

@Injectable({
  providedIn: 'root'
})
export class ClassxService {

  API_URL = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getAllClasses(): any {
    
    return (this.http.get(`${this.API_URL}/classes`)
      // .pipe(catchError(err => {
      //   return Observable.throw(err);

      // }))
    )
  }

  saveClass(classx: Classes): any {
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
