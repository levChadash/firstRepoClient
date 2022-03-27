import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'volunteerClient';
  authorized: boolean = false;
  authorizedAdmin: boolean = false;

  /**
   *
   */
  constructor(private _userservice: UserService) {
    this._userservice.getAuthorized().subscribe((data:any) => {
  
        this.authorized = data;
    

    })
    this._userservice.getAuthorizedAdmin().subscribe((data:any) => {
  
      this.authorizedAdmin = data;
  

  })
  }

}
