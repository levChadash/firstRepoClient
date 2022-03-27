import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Report } from 'src/app/models/report.models';
import { StudentsVolunteering } from 'src/app/models/studentsVolunteering.models';
import { UserDTO } from 'src/app/models/userDTO.models';
import { ReportServise } from 'src/app/services/report.service';
import { StudentsVolunteeringService } from 'src/app/services/studentsVolunteering.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  constructor( private _rps: ReportServise, private _router: Router) {

   }
   report!:Report;
  user!:UserDTO;
  reportForm!: FormGroup;
 
  ngOnInit(): void {
    this.reportForm = new FormGroup(
      {
        sDate: new FormControl(""),
        eDate: new FormControl(""),
        numVisets: new FormControl(""),
        comment: new FormControl("")
      }

    );
  
    

  }
  save(){
    this.report = this.reportForm.value;
    debugger;
    const userJson = sessionStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : new UserDTO();
    
    this.report.volunteeringId=this.user.volunteeringId;
    this._rps.postReport(this.report).subscribe(x=>alert("hi"));


  }

}

