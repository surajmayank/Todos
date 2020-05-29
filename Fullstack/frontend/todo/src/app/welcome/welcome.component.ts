import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WlcomeDataService } from '../service/data/wlcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 
  getWelcomeMessage:string;
  getErrorMessage:string;
  name = ''
  constructor(private route: ActivatedRoute, private wlcomeDataService: WlcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }


  getMessage() {
    this.wlcomeDataService.executeWelcomeService().subscribe(
      response =>this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getPathVariableMessage() {
    this.wlcomeDataService.executePathVariableService(this.name).subscribe(
      response =>this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfullResponse(response) {
    this.getWelcomeMessage=response.message;
  }

  handleErrorResponse(error) {
    this.getErrorMessage=error.error.message;
  }
}
