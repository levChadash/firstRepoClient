import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Absent } from 'src/app/models/absent.models';
import { Report } from 'src/app/models/report.models';
import { StudentsVolunteering } from 'src/app/models/studentsVolunteering.models';
import { UserDTO } from 'src/app/models/userDTO.models';
import { AbsentService } from 'src/app/services/absent.service';
import { ReportServise } from 'src/app/services/report.service';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css']
})
export class AbsentComponent implements OnInit {

  constructor( private _abs: AbsentService, private _router: Router) {

  }
absent!:Absent;
user!: UserDTO;
absentForm!: FormGroup;

 ngOnInit(): void {
   this.absentForm = new FormGroup(
     {
       sDate: new FormControl(""),
       eDate: new FormControl(""),
       reason: new FormControl("")
     }

   );
 
   

 }
 save(){
   this.absent = this.absentForm.value;
   debugger;
   const userJson = localStorage.getItem('user');
   this.user = userJson !== null ? JSON.parse(userJson) : new UserDTO();
   
   this.absent.volunteeringId=this.user.volunteeringId;
   this._abs.Post(this.absent).subscribe(x=>alert("hi"));


 }

}



