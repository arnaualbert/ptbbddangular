import { Component } from '@angular/core';
import { TablaenteraserviceService } from 'src/app/services/tablaenteraservice.service';
import { Animal } from 'src/app/model/Animal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeleteanimalserviceService } from 'src/app/services/deleteanimalservice.service';
@Component({
  selector: 'app-deleteanimal',
  templateUrl: './deleteanimal.component.html',
  styleUrls: ['./deleteanimal.component.css']
})
export class DeleteanimalComponent {
  constructor(private tabla: TablaenteraserviceService, private deleteanimal: DeleteanimalserviceService) { }
  arrayanimals: string[] = [];
  ngOnInit() {
    this.tabla.gettable().subscribe(result => {
      for (let i = 0; i < result.length; i++) {
        let res = result[i]
        let animal = new Animal(res['nombre'], res['especie'], res['cantidad'], res['familia'], res['alimentacion'], res['habitat'])
        // console.log(animal)
        let name = animal.nombre
        this.arrayanimals.push(name)
      }
      // this.arrayanimals = result
    })

    console.log(this.arrayanimals)
  }
  formdeleteanimal = new FormGroup({
    borra: new FormControl('', [
      Validators.required
    ])
  })
  submit() {
    console.log(this.formdeleteanimal.value.borra)
    this.deleteanimal.deleteanimal(this.formdeleteanimal.value.borra).subscribe(
      result => {
        if (result == null) {
          console.log('no');
        } else {
          console.log('yes');
        }
      }
    )
  }
}
