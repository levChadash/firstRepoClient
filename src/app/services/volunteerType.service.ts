import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { VolunteerType } from "../models/volunteerType";

@Injectable({
    providedIn: 'root'
})
export class VolunteerTypeService {
    constructor(private _http : HttpClient){
    
    }
  
    getallVolunteerTypes():Observable<VolunteerType[]>{
        return this._http.get<VolunteerType[]>("api/volunteerType/")
    }
}