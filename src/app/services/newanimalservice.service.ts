import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/Animal';

@Injectable({
  providedIn: 'root'
})
export class NewanimalserviceService {

  url:string= 'http://localhost:3000'
  constructor(private _http:HttpClient) { }
  addnewanimal(nombre:any,especie:any,cantidad:any,familia:any,alimentacion:any,habitat:any):Observable<Animal> {
    return this._http.post<Animal>(this.url+'/newanimal',{'nombre':nombre, 'especie':especie, 'cantidad':cantidad, 'familia':familia,'alimentacion':alimentacion, 'habitat':habitat},{responseType:'json'})
  }
}
