import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { LogInDTO } from "../models/logInDTO.models";
import { User } from "../models/user.models";
@Injectable({
  providedIn: "root"
})
export class UserService {
  isVolunteer: boolean = false;
  isAdmin: boolean = false;

  private authorized: BehaviorSubject<boolean> = new BehaviorSubject(this.isVolunteer);
  private authorizedAdmin: BehaviorSubject<boolean> = new BehaviorSubject(this.isAdmin);
  // private user$: BehaviorSubject<User> = new BehaviorSubject(null);

  setAuthorized(_authorized: boolean) {
    this.authorized.next(_authorized);
  }

  setAuthorizedAdmin(_authorized: boolean) {
    this.authorizedAdmin.next(_authorized);
  } 
  // setAuthorized2(user: User) {
  //   debugger
  //   this.user$.next(user);
  // }

  getAuthorized() {
    return this.authorized.asObservable();
  }
  getAuthorizedAdmin() {
    return this.authorizedAdmin.asObservable();
  }

  // getAuthorized2() {
  //   return this.authorized2.asObservable();
  // }

  logIn(loginuser: LogInDTO): Observable<User> {
    debugger
    return this._http.post<User>("api/User/logIn", loginuser);
  }
  constructor(private _http: HttpClient) {

  }
}