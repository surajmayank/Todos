import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }
  errorMessage='An error occured ! contact support at skyadav@gmail.com'

  ngOnInit() {
  }

}
