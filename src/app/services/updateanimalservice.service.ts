import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../model/Animal';

@Injectable({
  providedIn: 'root'
})
export class UpdateanimalserviceService {
  url:string= 'http://localhost:3000'
  constructor(private _http:HttpClient) { }
  updateanimal(especie:any,cantidad:any,familia:any,alimentacion:any,habitat:any,nombre:any){
    return this._http.post<Animal>(this.url+'/updateanimal',{'especie':especie, 'cantidad':cantidad, 'familia':familia,'alimentacion':alimentacion, 'habitat':habitat,'nombre':nombre},{responseType:'json'})
  }
}
