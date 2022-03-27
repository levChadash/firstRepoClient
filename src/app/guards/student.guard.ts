import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../models/user.models';
import { UserDTO } from '../models/userDTO.models';
import { FamilyService } from '../services/family.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  user!:UserDTO;
  canActivate()
  {
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : new User();
    if(this.user.isAdmin==false&&this.user.isVolunteer==false)
      return true;
    alert("no no no");
    return false;
  }   
  
}
