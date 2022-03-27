import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { LogInDTO } from 'src/app/models/logInDTO.models';
import { StudentDTO } from 'src/app/models/studentDTO.models';
import { StudentsVolunteering } from 'src/app/models/studentsVolunteering.models';
import { User } from 'src/app/models/user.models'
import { UserDTO } from 'src/app/models/userDTO.models';
import { StudentServise } from 'src/app/services/student.service';
import { StudentsVolunteeringService } from 'src/app/services/studentsVolunteering.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  ngOnInit(): void {
    debugger;
    this._userService.setAuthorized(false);
    this._userService.setAuthorizedAdmin(false);
    debugger;

  }
  constructor(private _userService: UserService, private _studentservice: StudentServise, private _svs: StudentsVolunteeringService, private _router: Router) {
    // this._userService.setAuthorized(false);
  }
  logInUser!: LogInDTO;
  user!: User;
  student!: StudentDTO;
  sv!: StudentsVolunteering;
  uDTO!: UserDTO;
  logInForm: FormGroup = new FormGroup(
    {
      "idNumber": new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      'password': new FormControl("", Validators.required)
    }
  );

  logIn() {
    debugger;
    this.logInUser = this.logInForm.value;
    this._userService.logIn(this.logInUser).subscribe((userDTO: any) => {
      this.uDTO = userDTO;
      debugger;
      if (this.uDTO == null) {
        alert("הפרטים שהכנסת שגויים נסה שוב");
      }
      else {
        localStorage.setItem('user', JSON.stringify(this.uDTO));


        if (this.uDTO.isAdmin == true) {
          //admin
          this._userService.setAuthorizedAdmin(true);
          this._router.navigate(['/main-admin']);
        }

        else if (this.uDTO.isVolunteer == true) {
          //מתנדבת
          this._userService.setAuthorized(true);
          this._router.navigate(['/report']);
        }

        else {
          //student
          this._router.navigate(['/register']);

        }


      }
    }
    );
  }
}




