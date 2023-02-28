import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Animal } from '../model/Animal';
@Injectable({
  providedIn: 'root'
})
export class TablaenteraserviceService {

  /**
   * @description declaration of variables
   */
  url: string = 'http://localhost:3000';
  /**
 * make the constructor
 * @param _http 
 */
  constructor(private _http: HttpClient) { }
  /**
   * get the table from the database
   * @returns the respone of the server
   */
  gettable(): Observable<Animal[]> {

    return this._http.get<Animal[]>(this.url + '/tabla').pipe(
      map(result => {
        return result;
      })
    )
  }

}
