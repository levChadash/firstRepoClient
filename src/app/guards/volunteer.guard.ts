import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentDTO } from '../models/studentDTO.models';
import { StudentsVolunteering } from '../models/studentsVolunteering.models';

import { User } from '../models/user.models';
import { UserDTO } from '../models/userDTO.models';
import { StudentServise } from '../services/student.service';
import { StudentsVolunteeringService } from '../services/studentsVolunteering.service';

@Injectable({
  providedIn: 'root'
})
export class VolunteerGuard implements CanActivate {
  constructor(private _studentservice:StudentServise,private _svs:StudentsVolunteeringService){}
  user!:UserDTO;
  student!:StudentDTO;
  sv!:StudentsVolunteering;
  canActivate()
  {
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : new User();
    if(this.user.isAdmin==false&&this.user.isVolunteer==true)
      return true;
    alert("no no no")
    return false;
  }   
  
}
