/**
 * This component makes the login
 * @authors Arnau Albert and Luis Cardenete
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/model/User';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**
   * @description delcare the variables
   */
  datalogin = "";
  message: string = "";
  user!: User;
  cookieValue: string = "";
  /**
   * Call tue service that we need
   * @param myloginservice 
   * @param cookieService 
   * @param route 
   */
  constructor(private myloginservice: LoginserviceService, private cookieService: CookieService, private route: Router) {

  }
  /**
   * @description make the formlogin FormGroup and the FormControl of each variable
   */
  formlogin = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })


  submit() {
    this.datalogin = `
    ${this.formlogin.value.username}
    ${this.formlogin.value.password}
    `
    console.log(this.datalogin)
    /**
     * @description get the variables from the form and send them to the service that make the login process
     */
    this.myloginservice.validateUsers(this.formlogin.value.username, this.formlogin.value.password).subscribe(
      result => {
        if (result == null) {
          this.message = 'credenciales invalidas';
          console.log('no');
        } else {
          this.user = JSON.parse(JSON.stringify(result))
          this.cookieService.set('USER', result.username + " " + result.role)
          this.cookieValue = this.cookieService.get('USER');
          this.cookieService.set('rols', result.resultats.role)
          localStorage.setItem('rol', result.resultats.role)
          this.route.navigate(['/tabla']);
          console.log('yes');
        }
      }
    )
  }


  findcookie() {
    let cookie = this.cookieService.get('USER')
    if (cookie != "") {
      return true;
    }
    else {
      return false;
    }
  }


}
