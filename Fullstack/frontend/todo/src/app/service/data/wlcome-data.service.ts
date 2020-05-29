import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_URL } from 'src/app/app.constants';

export class HelloWorldBean{
  constructor(public message:string){
  }
}

@Injectable({
  providedIn: 'root'
})
export class WlcomeDataService {
  constructor(private http: HttpClient) { }

  executeWelcomeService() {
    // let basicAuth = this.createBasicAuthentication();
    // let header = new  HttpHeaders({
    //      Autherization: basicAuth
    // })
    return this.http.get<HelloWorldBean>(`${APP_URL}/hello-bean`,
   // {headers:header}
    );
  }
  executePathVariableService(name) {
    // let basicAuth = this.createBasicAuthentication();
    // let header = new  HttpHeaders({
    //   Authorization: basicAuth
    // })
    return this.http.get<HelloWorldBean>(`${APP_URL}/helloWorld/${name}`,
    //{headers:header}
    );
  }

  // createBasicAuthentication(){
  //   let username="admin"
  //   let password="todo"
  //   let basichAuthHeader= 'Basic ' + window.btoa(username +':'+ password);
  //   console.log(basichAuthHeader)
  //   return basichAuthHeader;
  // }
}
