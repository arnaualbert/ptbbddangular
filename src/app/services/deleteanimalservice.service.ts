import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../model/Animal';


@Injectable({
  providedIn: 'root'
})
export class DeleteanimalserviceService {
  url:string= 'http://localhost:3000'
  constructor(private _http:HttpClient) { }
  deleteanimal(nombre:any){
    return this._http.post(this.url+'/deleteanimal',{'nombre':nombre},{responseType:"json"})
  }
}
