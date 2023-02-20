import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Animal } from '../model/Animal';
@Injectable({
  providedIn: 'root'
})
export class TablaenteraserviceService {


  url:string='http://localhost:3000';
  constructor(private _http:HttpClient) { }

  gettable():Observable<Animal[]>{
    // return this._http.get<Animal[]>('http://localhost:3000/tabla').map(data => _.values(data))
    return this._http.get<Animal[]>(this.url).pipe(
      map(result=>{return result}))

    // .do(console.log);
  }

  // this.http.get<Animal[]>(this.url).pipe(map(result=>result)).subscribe(result => console.log('result: ',result))
}
