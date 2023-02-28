import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../model/Animal';

@Injectable({
  providedIn: 'root'
})
export class UpdateanimalserviceService {
  /**
 * @description declaration of variables
 */
  url: string = 'http://localhost:3000'
  /**
* make the constructor
* @param _http 
*/
  constructor(private _http: HttpClient) { }
  /**
   * update the animal to the databaase
   * @param especie is the especie of the animal to be updated
   * @param cantidad is the cantidad of the animal to be updated
   * @param familia is the familia of the animal to be updated
   * @param alimentacion is the alimentacion of the animal to be updated
   * @param habitat is the locality of the animal to be updated
   * @param nombre is the nombre of the animal to be updated
   * @returns the response of the server
   */
  updateanimal(especie: any, cantidad: any, familia: any, alimentacion: any, habitat: any, nombre: any) {
    return this._http.post<Animal>(this.url + '/updateanimal', { 'especie': especie, 'cantidad': cantidad, 'familia': familia, 'alimentacion': alimentacion, 'habitat': habitat, 'nombre': nombre }, { responseType: 'json' })
  }
}
