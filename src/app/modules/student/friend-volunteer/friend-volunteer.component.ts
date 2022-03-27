import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { DialogData, RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-friend-volunteer',
  templateUrl: './friend-volunteer.component.html',
  styleUrls: ['./friend-volunteer.component.css']
})
export class FriendVolunteerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FriendVolunteerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  check(){
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}


