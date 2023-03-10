import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  /**
   * @description declaration of variables
   */
  url: string = 'http://localhost:3000';
  private usuariSubject: BehaviorSubject<User>;
  public usuario: Observable<User>;

  public usuaridata() {
    return this.usuariSubject.value;
  }
  /**
   * make the controller with tue services needed
   * @param _http 
   */
  constructor(private _http: HttpClient) {
    this.usuariSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('usuari')!))
    this.usuario = this.usuariSubject.asObservable();
  }

  /**
   * makes the login
   * @param username is the username of the user that will be logged in
   * @param password is the password of the user that will be logged in
   * @returns the response from the server
   */
  validateUsers(username: any, password: any): Observable<any> {

    // #username?:string,  password?:string,  name?:string,  lastname?:string, role?:string, mail?:string, number?:number, age?:number
    //let u = new User(username, password,"","","","",0,0);
    //console.log(u);

    return this._http.post<any>(this.url + '/login', { "username": username, "password": password }, { responseType: "json" }).pipe(
      map(res => {
        console.log(JSON.stringify(res));
        if (res != null) {
          localStorage.setItem('token', res.accessToken);
          const user: User = new User(res.resultats.username, res.resultats.password, res.resultats.name, res.resultats.lastname, res.resultats.role, res.resultats.mail, res.resultats.number, res.resultats.age);
          console.log("Objecte Usuari");
          console.log(user);
          localStorage.setItem('usuari', JSON.stringify(res));
          localStorage.setItem('role', res.resultats.role);
          // console.log("LocalStorage");
          // console.log(localStorage.getItem('usuari'));
          this.usuariSubject.next(user);
        }
        return res;
      })
    )
  }
}