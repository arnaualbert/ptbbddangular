/**
 * This component add a new animal
 * @authors Arnau Albert and Luis Cardenete
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewanimalserviceService } from 'src/app/services/newanimalservice.service';

@Component({
  selector: 'app-moreanimals',
  templateUrl: './moreanimals.component.html',
  styleUrls: ['./moreanimals.component.css']
})

export class MoreanimalsComponent {

  /**
   * calls the service to add a new animal
   * @param newanimal 
   */
  constructor(private newanimal:NewanimalserviceService){}
  /**
   * make the formaddanimal 
   */
  formaddanimal = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    especie: new FormControl('', [
      Validators.required
    ]),
    cantidad: new FormControl('', [
      Validators.required
    ]),
    familia: new FormControl('', [
      Validators.required
    ]),
    alimentacion: new FormControl('', [
      Validators.required
    ]),
    habitat: new FormControl('', [
      Validators.required
    ])
  })

  submit(){
    // add a new animal to the database
    this.newanimal.addnewanimal(this.formaddanimal.value.nombre, this.formaddanimal.value.especie, this.formaddanimal.value.cantidad, this.formaddanimal.value.familia, this.formaddanimal.value.alimentacion, this.formaddanimal.value.habitat).subscribe(
      result => {
        if(result==null) {
          console.log('error');
        }else{
          console.log('added successfully');
        }
      }
    )
  }
}
