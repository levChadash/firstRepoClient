import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


import { Student } from "../models/student.models"
import { StudentDTO } from "../models/studentDTO.models";

@Injectable({  
    providedIn: 'root'
})
export class StudentServise{
   
    getallStudent():Observable<Student[]>{
        return this._http.get<Student[]>("api/student/")
    }
    getStudentById( id:number):Observable<StudentDTO>{
        return this._http.get<StudentDTO>("api/student/"+id)
    }

    getStudentByIdNum( id:string):Observable<StudentDTO>{
        debugger;
        return this._http.get<StudentDTO>("api/student/studentId/"+id)
    }

    getStudentByUserId( id:number):Observable<StudentDTO>{
        return this._http.get<StudentDTO>("api/student/userId/"+id)
    }
    
    postStudent(student:Student):Observable<number>{
     return this._http.post<number>("api/student/",student)   
    }
    putStudent(student:Student):Observable<Student>{
        return this._http.put<Student>("api/student/",student)
    }
    deleteStudent(id:number){
        return this._http.delete("api/student/"+id)
    }
   
    
    constructor(private _http : HttpClient){
    
    }
    }