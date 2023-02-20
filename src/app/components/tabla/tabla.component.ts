import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, single } from 'rxjs';
import { Animal } from 'src/app/model/Animal';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { TablaenteraserviceService } from 'src/app/services/tablaenteraservice.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  url:string='http://localhost:3000/tabla';

  arranimals:any; // <-

constructor(private http: HttpClient) { }

ngOnInit() {
  //funciona https://gist.github.com/killerchip/3498804bbab1a1eaea7cdc0c864b6c4f
  //funciona this.http.get<Animal[]>(this.url).pipe(map(result=>result)).subscribe(result => console.log(result))

  this.http.get<Animal[]>(this.url).pipe(
    map(result => {
        return result;
    })
  ).subscribe(result => {
    for(let i = 0;i < result.length;i++){
    let res = result[i]
    let animal = new Animal(res['nombre'],res['especie'],res['cantidad'],res['familia'],res['alimentacion'],res['habitat'])
    console.log(animal)}
    this.arranimals = result
  })


}

}
