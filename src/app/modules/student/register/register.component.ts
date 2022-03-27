import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
 import {EditorModule} from 'primeng/editor';

import { VolunteerType } from 'src/app/models/volunteerType';
import { VolunteerTypeService } from 'src/app/services/volunteerType.service';
import { FriendVolunteerComponent } from '../friend-volunteer/friend-volunteer.component';
import { Volunteering } from 'src/app/models/volunteering.models';
import { VolunteeringService } from 'src/app/services/volunteering.service';
import { Student } from 'src/app/models/student.models';
import { StudentDTO } from 'src/app/models/studentDTO.models';
import { StudentServise } from 'src/app/services/student.service';
import { User } from 'src/app/models/user.models';
import { StudentsVolunteeringService } from 'src/app/services/studentsVolunteering.service';
import { StudentsVolunteering } from 'src/app/models/studentsVolunteering.models';




export interface User1 {
  name: string;
}
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//stud!:StudentDTO;
user!:User;
register!:Volunteering;
registerId!:number;
isDisabled:boolean = true;
studVolunteer!:StudentsVolunteering;
registerForm: FormGroup=new FormGroup(
  {
    volunteerTypeId: new FormControl(""),
    challenging: new FormControl(""),
    neihborhood: new FormControl(""),
    comment: new FormControl("")
  }

);;
constructor(public dialog: MatDialog,private _volunteerTypeService: VolunteerTypeService, private _volunteeringService :VolunteeringService , private _studentServise :StudentServise,
  private _studentsVolunteeringService :StudentsVolunteeringService) { }
ngOnInit(): void {
    this._volunteerTypeService.getallVolunteerTypes().subscribe((listTypes:any )=> this.volunteerTypes=listTypes);

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
    
  } 
 
   
  //type
   volunteerTypes!: VolunteerType[] ;

  //friend
  friendid!: string;
  name!: string;
  friendStud!:StudentDTO;
  openDialog(): void {
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : new User();
  
    const dialogRef = this.dialog.open(FriendVolunteerComponent, {
      width: '250px',
      data: {name: this.user.name, id: this.friendid},
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
     this.friendid = result;
      this.check(result);
    });
  }

  //neighborhood
  myControl = new FormControl();
  options: User1[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions!: Observable<User1[]> ;

  displayFn(user: User1): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User1[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  //comment
  autoResize:boolean=true;

  save(){
    debugger;
      this.register =this.registerForm.value;
      this._volunteeringService.postVolunteering(this.register).subscribe((id:any)=>this.registerId=id);
      this.studVolunteer.volunteeringId=this.registerId;
      //this.studVolunteer.studentId=this.user.;
      this._studentsVolunteeringService.Post(this.studVolunteer);
      if(this.friendid){
        this.studVolunteer.volunteeringId=this.registerId;
        //this.studVolunteer.studentId=this..;
      }

  }
  check(result:string){
    if(result){
      debugger;
      this._studentServise.getStudentByIdNum(result).subscribe(x=>
      {
        this.friendStud=x;
        if(this.friendStud){
        this.friendid=this.user.name;
      }
       else{
        alert("מס זהות שגוי");
        this.friendid="";
        return;
      }
    });
  }
  
}
}

