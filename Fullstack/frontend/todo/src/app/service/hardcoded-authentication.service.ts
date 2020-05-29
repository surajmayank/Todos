import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  authenticat(username, password) {
    console.log("before " + this.isUserLoggedIn());
    if (username === 'admin' && password === 'todo') {
      sessionStorage.setItem("currentuser", username);
      console.log("after " + this.isUserLoggedIn());
      return true;
    }
    else {
      return false;
    }

  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem("currentuser");
    return !(user === null);
  } 
  
  logout() {
    let user = sessionStorage.removeItem("currentuser");
  }




}
