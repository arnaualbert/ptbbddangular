/**
 * This component manages the updates of the animals
 * @authors Arnau Albert and Luis Cardenete
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/model/Animal';
import { TablaenteraserviceService } from 'src/app/services/tablaenteraservice.service';
import { UpdateanimalserviceService } from 'src/app/services/updateanimalservice.service';

@Component({
  selector: 'app-updateanimal',
  templateUrl: './updateanimal.component.html',
  styleUrls: ['./updateanimal.component.css']
})
export class UpdateanimalComponent {
  /**
   * Make the constructor
   * @param tabla 
   * @param updateanimal 
   * @param route 
   * @param redirectRoute 
   */
  constructor(private tabla: TablaenteraserviceService, private updateanimal: UpdateanimalserviceService, private route: ActivatedRoute,
    private redirectRoute: Router) { }
  /**
   * Declaration of variables
   */
  arrayanimals: Animal[] = [];
  animaltomodifi: Animal = new Animal();


  formupdateanimal = new FormGroup({
    animal_to_update: new FormControl('', [
      Validators.required
    ])
  })
  /**
   * Get the form see animal
   */
  formaseeanimal = new FormGroup({
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

  ngOnInit() {
    /**
     * Get the whole array of animals 
     */
    this.tabla.gettable().subscribe(result => {
      for (let i = 0; i < result.length; i++) {
        let res = result[i]
        let animal: Animal = new Animal(res['nombre'], res['especie'], res['cantidad'], res['familia'], res['alimentacion'], res['habitat'])
        this.arrayanimals.push(animal)
        // get the animal name from the route that comes from the table
        let a = this.route.snapshot.paramMap.get('animalname')
        console.log(this.arrayanimals)
        console.log(a)
        // compares if the name of the animal matches the animal in the array and give a value to the variable animaltomodifi with all the info about the animal
        for (let i = 0; i < this.arrayanimals.length; i++) {
          if (a == this.arrayanimals[i].nombre) {
            this.animaltomodifi = this.arrayanimals[i]
            console.log(this.animaltomodifi)
          }
        }
      }
    })
    // console.log(this.arrayanimals)

    // let a = this.route.snapshot.paramMap.get('animalname')
    // console.log(this.arrayanimals)
    // console.log(a)
    // for(let i = 0;i<this.arrayanimals.length;i++){
    //   if(a == this.arrayanimals[i].nombre){
    //     this.animaltomodifi = this.arrayanimals[i]
    //     console.log(this.animaltomodifi)
    //   }
    // }

    // this.animaltomodifi = this.route.snapshot.paramMap.get('animalname')
  }

  submitanimaltoupdate() {
    let animal = this.formupdateanimal.value.animal_to_update
    let a = animal
    for (let i = 0; i < this.arrayanimals.length; i++) {
      if (a == this.arrayanimals[i].nombre) {
        this.animaltomodifi = this.arrayanimals[i]
      }
    }
  }

  /**
   * update the animal
   */
  submitupdateanimal() {
    console.log('click')
    // call the service to update the animal and make the update
    this.updateanimal.updateanimal(this.formaseeanimal.value.especie, this.formaseeanimal.value.cantidad, this.formaseeanimal.value.familia, this.formaseeanimal.value.alimentacion, this.formaseeanimal.value.habitat, this.animaltomodifi.nombre).subscribe(
      result => {
        if (result == null) {
          console.log('n0oooo')
        } else {
          console.log(result)
          console.log('update')
        }
      }
    )
  }

}
