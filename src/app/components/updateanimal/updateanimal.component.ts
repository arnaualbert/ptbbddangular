import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Animal } from 'src/app/model/Animal';
import { TablaenteraserviceService } from 'src/app/services/tablaenteraservice.service';
import { UpdateanimalserviceService } from 'src/app/services/updateanimalservice.service';

@Component({
  selector: 'app-updateanimal',
  templateUrl: './updateanimal.component.html',
  styleUrls: ['./updateanimal.component.css']
})
export class UpdateanimalComponent {
  constructor(private tabla: TablaenteraserviceService, private updateanimal:UpdateanimalserviceService){}
  arrayanimals:Animal[] = [];
  animaltomodifi:Animal = new Animal();

  formupdateanimal = new FormGroup({
    animal_to_update: new FormControl('',[
      Validators.required
    ])
  })

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
    this.tabla.gettable().subscribe(result => {
      for(let i = 0;i < result.length;i++){
        let res = result[i]
        let animal:Animal = new Animal(res['nombre'],res['especie'],res['cantidad'],res['familia'],res['alimentacion'],res['habitat'])
       // console.log(animal)
       this.arrayanimals.push(animal)
        }
    })
    console.log(this.arrayanimals)
  }

  submitanimaltoupdate(){
    let animal = this.formupdateanimal.value.animal_to_update
    let a = animal
    for(let i = 0;i<this.arrayanimals.length;i++){
      if(a == this.arrayanimals[i].nombre){
        this.animaltomodifi = this.arrayanimals[i]
      }
    }
  }


  submitupdateanimal(){
    this.updateanimal.updateanimal(this.animaltomodifi.especie,this.animaltomodifi.cantidad,this.animaltomodifi.familia,this.animaltomodifi.alimentacion,this.animaltomodifi.habitat,this.animaltomodifi.nombre).subscribe(
      result => {
        if(result==null){
          console.log('n0oooo')
        }else{
          console.log('update')
        }
      }
    )
  }
  
}
