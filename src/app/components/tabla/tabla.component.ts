import { Component } from '@angular/core';
import { Animal } from 'src/app/model/Animal';
import { TablaenteraserviceService } from 'src/app/services/tablaenteraservice.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  url:string='http://localhost:3000/tabla';

  arranimals:any; // <-

  //new
  animalfiltrado!: Animal[];
  total!:number;
  cp!:number;

constructor(private tabla: TablaenteraserviceService) { }
ngOnInit() {
  this.tabla.gettable().subscribe(result => {
    for(let i = 0;i < result.length;i++){
    let res = result[i]
    let animal = new Animal(res['nombre'],res['especie'],res['cantidad'],res['familia'],res['alimentacion'],res['habitat'])
    console.log(animal)}
    this.arranimals = result
  })
  //new
  this.animalfiltrado = this.arranimals
  this.total = 10;
  this.cp=1;
}
}
