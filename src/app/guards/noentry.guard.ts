import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from '../services/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoentryGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private route:Router,private _http:LoginserviceService){}
  canActivate(route: ActivatedRouteSnapshot) {
    const usuario=this._http.usuaridata();
    //console.log("erererer",usuario);
    if(usuario!=null){

      return true;
    } 
      this.route.navigate(['/login']);
      return false;
  }

  
}
