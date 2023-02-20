import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {


  url:string='http://localhost:3000';

  constructor(private _http:HttpClient) { }

  registerUser(username:any, password:any,name:any,lastname:any,role:any,mail:any,number:any,age:any):Observable<User>{

    return this._http.post<User>(this.url+'/register',{'username':username, 'password':password, 'name':name, 'lastname':lastname,'role':role ,'mail':mail, 'number':number,'age':age},{responseType:'json'})
  }
}
