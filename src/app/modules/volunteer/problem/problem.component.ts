import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDTO } from 'src/app/models/userDTO.models';
import { Comment } from 'src/app/models/comment.models';
import { StudentServise } from 'src/app/services/student.service';
import { CommentService } from 'src/app/services/comment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  constructor(private _studentServise:StudentServise,private _commentService: CommentService,private _router: Router
    ) { }
  problemForm!: FormGroup;
  comment!: Comment;
  user!:UserDTO;
  ngOnInit(): void {
    this.problemForm = new FormGroup(
      {
        comment1: new FormControl("")
      }

    );
  }

  save(){
    this.comment = this.problemForm.value;
    debugger;
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : new UserDTO();
    this.comment.fromUserId=this.user.Id;
    this.comment.startDate=new Date();
    this.comment.endDate=new Date();
    console.log( this.comment,"this.comment");
    
     this._commentService.postComment(this.comment).subscribe(x=>{
       alert(this.comment.comment1)
      this._router.navigate(['/app-main-volunteer']);
     });


  }
}
