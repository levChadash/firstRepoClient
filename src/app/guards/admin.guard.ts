import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {User} from '../models/user.models'
import { FamilyService } from '../services/family.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(){}
  user!:User;
  canActivate()
  {
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : new User();
    if(this.user.isAdmin==true)
      return true;
    alert("no no no");
    return false;
  }   
  
}
