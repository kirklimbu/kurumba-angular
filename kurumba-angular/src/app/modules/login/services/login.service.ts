import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // we can now access environment.apiUrl
  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
    // console.log(environment.production); // Logs false for default environment
  }

  login(username: string, password: string): any {
    console.log('login service');

    return (
      this.http
        .post<User>(this.API_URL + '/user/logen', { username, password })

    );
  }
}
