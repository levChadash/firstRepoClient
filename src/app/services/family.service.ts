import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { Family } from "../models/family.models"
import { FamilyDTO } from "../models/familyDTO.models";
@Injectable({
    providedIn: 'root'
})
export class FamilyService{
    getFamilyList():Observable<FamilyDTO[]>{
        debugger;
      return this._http.get<FamilyDTO[]>("api/family/")
    }
    getFamilyById( id:number):Observable<Family>{
        return this._http.get<Family>("api/family/"+id)
    }
    postFamily(family:Family):Observable<number>{
     return this._http.post<number>("api/admin/",family)   
    }
    putFamily(family:Family):Observable<Family>{
        return this._http.put<Family>("api/admin/",family)
    }
    deleteFamily(id:number){
        return this._http.delete("api/family/"+id)
    }
    constructor(private _http : HttpClient){
    
    }
    }