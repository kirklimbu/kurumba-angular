import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Year } from 'src/app/shared/models/year.model';

@Injectable({
  providedIn: 'root'
})
export class YearService {


  // we can now access environment.apiUrl
  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
    // console.log(environment.production); // Logs false for default environment
  }

  saveYear(year: Year):any{
    console.log('student save service' + year);

    return (
      this.http
        .post(`${this.API_URL}/create/createyear`, { ...year })
      // .pipe(
      //   catchError(err => {
      //     return Observable.throw(err);
      //   })
      // )
    );
  }
}
