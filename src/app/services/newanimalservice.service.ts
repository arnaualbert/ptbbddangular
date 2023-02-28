import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/Animal';

@Injectable({
  providedIn: 'root'
})
/**
 * @description add a new animal to the database
 */
export class NewanimalserviceService {
  /**
   * @description declare the variables
   */
  url: string = 'http://localhost:3000'
  /**
   * make the constructor with the services needed
   * @param _http 
   */
  constructor(private _http: HttpClient) { }
  /**
   * create a new animal and add it to the database
   * @param nombre the name of the new animal
   * @param especie thee specie of the new animal
   * @param cantidad the quantity of the new animal
   * @param familia the family of the new animal
   * @param alimentacion the alimentacion of the new animal
   * @param habitat the habitat of the new animal
   * @returns the response of the server
   */
  addnewanimal(nombre: any, especie: any, cantidad: any, familia: any, alimentacion: any, habitat: any): Observable<Animal> {
    return this._http.post<Animal>(this.url + '/newanimal', { 'nombre': nombre, 'especie': especie, 'cantidad': cantidad, 'familia': familia, 'alimentacion': alimentacion, 'habitat': habitat }, { responseType: 'json' })
  }
}
