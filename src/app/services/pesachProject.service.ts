import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { PesachProject } from "../models/pesachproject.models"
@Injectable({
    providedIn: 'root'
})
export class PesachProjectService{
   
    getPesachProjectById( id:number):Observable<PesachProject>{
        return this._http.get<PesachProject>("api/pesachProject/"+id)
    }
    
    postPesachProject(pesachProject:PesachProject):Observable<number>{
     return this._http.post<number>("api/pesachProject/",pesachProject)   
    }
    putPesachProject(pesachProject:PesachProject):Observable<PesachProject>{
        return this._http.put<PesachProject>("api/pesachProject/",pesachProject)
    }
    deletePesachProject(id:number){
        return this._http.delete("api/pesachProject/"+id)
    }
    constructor(private _http : HttpClient){
    
    }
    }