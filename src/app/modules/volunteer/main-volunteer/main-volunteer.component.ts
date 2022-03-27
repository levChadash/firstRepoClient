import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentsVolunteering } from 'src/app/models/studentsVolunteering.models';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-main-volunteer',
  templateUrl: './main-volunteer.component.html',
  styleUrls: ['./main-volunteer.component.css']
})
export class MainVolunteerComponent implements OnInit {
 constructor( private _router: Router) {
  const userJson = sessionStorage.getItem('user');
  this.user = userJson !== null ? JSON.parse(userJson) : new User();

  }
  sv!:StudentsVolunteering;
  user!:User;
  

  ngOnInit(): void {
    
  }
  // report(){
  //   this._router.navigate(['/report']);
  // }
  // problem(){
  //   this._router.navigate(['/problem']);
  // }

}
