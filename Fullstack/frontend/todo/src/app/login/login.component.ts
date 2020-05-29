import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //username = 'admin'
  username= ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;


  constructor(private router: Router, private hardcodedAuthentication: HardcodedAuthenticationService, private basicAuthentication: BasicAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin() {
    //console.log(this.username);
    if (this.hardcodedAuthentication.authenticat(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthentication.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }

}
