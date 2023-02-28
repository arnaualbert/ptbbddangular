import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

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
   * register a new user to the database
   * @param username the username to register in the database
   * @param password the password to register in the database
   * @param name the name of the user to register in the database
   * @param lastname the last name of the user to register in the database
   * @param role the role of the user to register in the database
   * @param mail the email of the user to register in the database
   * @param number the number of the user to register in the database 
   * @param age the age of the user to register in the database
   * @returns the response of the server
   */
  registerUser(username: any, password: any, name: any, lastname: any, role: any, mail: any, number: any, age: any): Observable<User> {

    return this._http.post<User>(this.url + '/register', { 'username': username, 'password': password, 'name': name, 'lastname': lastname, 'role': role, 'mail': mail, 'number': number, 'age': age }, { responseType: 'json' })
  }
}
