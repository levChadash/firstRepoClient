import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StudentsVolunteering } from "../models/studentsVolunteering.models";
@Injectable({
    providedIn: 'root'
})
export class StudentsVolunteeringService{
    constructor(private _http : HttpClient) {}

    getStudentsVolunteeringByStudentId( id:number):Observable<StudentsVolunteering>{
        return this._http.get<StudentsVolunteering>("api/StudentsVolunteering/"+id)
    }
    
   Post( studentsVolunteering: StudentsVolunteering):Observable<number>
    {
        return this._http.post<number>("api/StudentsVolunteering/",studentsVolunteering);
    }
}