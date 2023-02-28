/**
 * This component mange the menu of the page
 * @authors Arnau Albert and Luis Cardenete
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent {
  /**
   * declare variables
   */
  role: any;
  cookieValue: any;
  /**
   * Create constructor
   * @param cookieService 
   * @param router 
   */
  constructor(private cookieService: CookieService, private router: Router) {
    this.role = localStorage.getItem('rol');
    console.log(this.role)
    this.cookieValue = cookieService.get('rols');
    console.log(this.cookieValue)
  }

  /**
   * find the cookie
   * @returns boolean
   */
  findcookie() {
    let cookie = this.cookieService.get('USER')
    if (cookie != "") {
      return true;
    }
    else {
      return false;
    }
  }
  /**
   * delete all localstorage and cookies
   */
  deleteAll() {
    this.router.navigate(['/login']).then(() => window.location.reload());
    this.cookieService.deleteAll();
    localStorage.clear();
  }
  /**
   * find if the user that is logged is a admin
   * @returns boolean
   */
  findadmin() {
    let cookie = this.cookieService.get('rols')
    if (cookie == "admin") {
      return true;
    }
    else {
      return false;
    }
  }
  /**
   * find if the user that is logged is a buyer
   * @returns boolean
   */
  findbuyer() {
    let cookie = this.cookieService.get('rols')
    if (cookie == "buyer") {
      return true;
    }
    else {
      return false;
    }
  }

}
