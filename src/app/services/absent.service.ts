import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Absent } from "../models/absent.models";

@Injectable({
    providedIn: 'root'
})
export class AbsentService{
    Post( abs:Absent):Observable<number>
    {
        debugger;
        return this._http.post<number>("api/absent/",abs)    
    }  
    constructor(private _http : HttpClient){}
}