import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"

import { Comment } from "../models/comment.models";
@Injectable({
    providedIn: 'root'
})
export class CommentService{
    getCommentList():Observable<Comment[]>{
      return this._http.get<Comment[]>("api/comment")
    }
    getCommentById( id:number):Observable<Comment>{
        return this._http.get<Comment>("api/admin/"+id)
    }

    postComment(comment:Comment):Observable<number>{
        debugger;
     return this._http.post<number>("api/Comment/",comment)   
    }

    putComment(comment:Comment):Observable<Comment>{
        return this._http.put<Comment>("api/admin/",comment)
    }
    deleteComment(id:number){
        return this._http.delete("api/comment/"+id)
    }
    constructor(private _http : HttpClient){
    
    }
    }