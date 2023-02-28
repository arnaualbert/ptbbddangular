/**
 * This component show the table
 * @authors Arnau Albert and Luis Cardenete
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Animal } from 'src/app/model/Animal';
import { DeleteanimalserviceService } from 'src/app/services/deleteanimalservice.service';
import { TablaenteraserviceService } from 'src/app/services/tablaenteraservice.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  /**
   * Declaration of varaibles
   */
  url: string = 'http://localhost:3000/tabla';
  arranimals: any; // <-
  //new
  animalfiltrado!: Animal[];
  total!: number;
  cp!: number;
  /**
   * make tha consturctor and call the services that are needed
   * @param tabla 
   * @param cookieService 
   * @param deleteanimal 
   * @param route 
   */
  constructor(private tabla: TablaenteraserviceService, private cookieService: CookieService, private deleteanimal: DeleteanimalserviceService, private route: Router) { }
  ngOnInit() {
    this.tabla.gettable().subscribe(result => {
      for (let i = 0; i < result.length; i++) {
        let res = result[i]
        let animal = new Animal(res['nombre'], res['especie'], res['cantidad'], res['familia'], res['alimentacion'], res['habitat'])
        console.log(animal)
      }
      this.arranimals = result
    })
    //new
    this.animalfiltrado = this.arranimals
    this.total = 10;
    this.cp = 1;
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
   * Delete the animal from the database
   * @param animal is the name of the animal that is going to be deleted
   */
  deleteanimals(animal: string) {
    console.log(animal);
    this.deleteanimal.deleteanimal(animal).subscribe(
      result => {
        if (result == null) {
          console.log('no');
        } else {
          console.log('yes');
          window.location.reload();
        }

      }
    )
  }
  /**
   * redirect the user to the form to update the animal
   * @param animal is the name of the animal that is going to be updated
   */
  updateform(animal: string) {
    console.log(animal);
    this.route.navigate(['/updateanimal', { 'animalname': animal }]);
  }
}
