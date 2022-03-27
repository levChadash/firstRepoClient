import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-volunteer-menu',
  templateUrl: './volunteer-menu.component.html',
  styleUrls: ['./volunteer-menu.component.css']
})

export class VolunteerMenuComponent implements OnInit {
  authorized: boolean = false;
 

  constructor(private _userservice: UserService) { }

  ngOnInit(): void {
    this._userservice.getAuthorized().subscribe(data => {
     
      this.authorized = data;
     

    })
   

  }

  setting() {
    console.log("in setting");
    this._userservice.setAuthorized(false);

  }

}
