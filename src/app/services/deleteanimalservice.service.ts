import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../model/Animal';


@Injectable({
  providedIn: 'root'
})
/**
 * @description delete a specific animal from the database
 */
export class DeleteanimalserviceService {
  /**
   * @description declaration of variables
   */
  url:string= 'http://localhost:3000'
  /**
   * Make the controller with the services we need
   * @param _http 
   */
  constructor(private _http:HttpClient) { }
  /**
   * delete a specific animal from the database
   * @param nombre is the name of the animal to delete
   * @returns the response of the server
   */
  deleteanimal(nombre:any){
    return this._http.post(this.url+'/deleteanimal',{'nombre':nombre},{responseType:"json"})
  }
}
