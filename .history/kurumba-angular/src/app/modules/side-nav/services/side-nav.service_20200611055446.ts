import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
      )
  }

  saveNewPassword():any
}
