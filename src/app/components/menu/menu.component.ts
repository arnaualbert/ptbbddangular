import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  role:any;
  cookieValue:any;
  constructor(private cookieService:CookieService,private router:Router){
    // this.role = localStorage.getItem('role');
    // console.log(this.role)
    this.role = localStorage.getItem('rol');
    console.log(this.role)
    this.cookieValue = cookieService.get('rols') ;
    console.log(this.cookieValue)
  }

  // ngOnInit() {
  //   this.role = localStorage.getItem('rol');
  //   console.log(this.role)
  // }

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
    localStorage.clear();
  }

  findcookies(){
    let cookie = this.cookieService.get('rols')
    if(cookie == "admin"){
      return true;
    }
    else{
      return false;
    }
  }

}
