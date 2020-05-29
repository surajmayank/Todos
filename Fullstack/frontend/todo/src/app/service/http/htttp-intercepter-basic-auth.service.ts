import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HtttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticatinService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = "admin"
    // let password = "todo"
    // let basichAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    let basichAuthHeader = this.basicAuthenticatinService.getAuthenticatedToken();
    let username = this.basicAuthenticatinService.getAuthenticatedUser();

    if (basichAuthHeader && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basichAuthHeader
        }
      })
    }
    return next.handle(request);
  }

}
