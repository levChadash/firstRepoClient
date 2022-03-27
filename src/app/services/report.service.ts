import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { Report } from "../models/report.models";

@Injectable({
    providedIn: 'root'
})
export class ReportServise{
   
    getReport():Observable<Report[]>{
        return this._http.get<Report[]>("api/report/")
    }
    getReportById( id:number):Observable<Report>{
        return this._http.get<Report>("api/report/"+id)
    }
    
    postReport(report:Report):Observable<number>{
     return this._http.post<number>("api/report/",report)  
     
    }
    putReport(report:Report):Observable<Report>{
        return this._http.put<Report>("api/report/",report)
    }
    deleteReport(id:number){
        return this._http.delete("api/report/"+id)
    }
    constructor(private _http : HttpClient){
    
    }
    }