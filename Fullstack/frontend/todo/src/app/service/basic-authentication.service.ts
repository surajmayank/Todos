import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER= 'currentuser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {
    let basichAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    let header = new HttpHeaders({
      Authorization: basichAuthHeader
    })
    return this.http.get<AuthenticationBean>(`${APP_URL}/basicauth`,
      { headers: header }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basichAuthHeader);
            return data;
          }
        )
      );
  }


  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    let user = sessionStorage.removeItem(AUTHENTICATED_USER);
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}
