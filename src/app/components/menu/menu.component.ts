import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(private cookieService:CookieService,private router:Router){}

  findcookie(){
    let cookie = this.cookieService.get('USER')
    if(cookie != ""){
      return true;
    }
    else{
      return false;
    }
  }

  deleteAll(){
    this.router.navigate(['/login']).then(()=>window.location.reload());
    this.cookieService.deleteAll();
    // localStorage.removeItem('token')
  }
}
