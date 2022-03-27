
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { Volunteering } from "../models/volunteering.models"
@Injectable({
    providedIn: 'root'
})
export class VolunteeringService{
   
    getVolunteering( ):Observable<Volunteering[]>{
        return this._http.get<Volunteering[]>("api/volunteering/")
    }
    postVolunteering(volunteering:Volunteering):Observable<number>{
        debugger;
     return this._http.post<number>("api/volunteering",volunteering)   
    }
    putVolunteering(register:Volunteering):Observable<Volunteering>{
        return this._http.put<Volunteering>("api/volunteering/",register)
    }
    deleteVolunteering(id:number){
        return this._http.delete("api/volunteering/"+id)
    }
    constructor(private _http : HttpClient){
    
    }
    }