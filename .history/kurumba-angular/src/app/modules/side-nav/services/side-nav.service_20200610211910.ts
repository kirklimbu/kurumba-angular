import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  API_URL = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) {


  }

  getTotalCount(): any{
    return this.http.get( `${this.API_URL}/totalcount`)
    .pipe(
      catchError( error)
    )
  }
}
