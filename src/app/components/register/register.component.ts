/**
 * This component makes the registration of the user always with the role buyer
 * @authors Arnau Albert and Luis Cardenete
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { RegisterserviceService } from 'src/app/services/registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // declaration of variables
  message: string ="";
  user!:User;
  /**
   * make tha constructor and call the services that we need to register
   * @param registeringService 
   * @param route 
   */
  constructor(private registeringService:RegisterserviceService,private route:Router){}
  // make the formregister FormGroup and the FormControl of each variable
  formregister = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ]),
    name: new FormControl('',[
      Validators.required,
     Validators.minLength(2),
     Validators.maxLength(20),
     Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')
    ]),
    lastname: new FormControl('',[
      Validators.required,
     Validators.minLength(2),
     Validators.maxLength(20),
     Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')
    ]),
    mail: new FormControl('',[
      Validators.required,
      Validators.maxLength(30),
      Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")
    ]),
    number: new FormControl('',[
      Validators.required,
      Validators.min(100000000),
      Validators.max(999999999)
      // Validators.minLength(9),
      // Validators.maxLength(9)
    ]),
    age: new FormControl('',[
      Validators.required,
      // Validators.minLength(2),
      // Validators.maxLength(3)
      Validators.max(100)
    ])
  })

  submit(){
    console.log('register')
    /**
     * @description call the register service to register a new user with the variales of the form
     */
    this.registeringService.registerUser(this.formregister.value.username, this.formregister.value.password, this.formregister.value.name, this.formregister.value.lastname,'buyer',this.formregister.value.mail, this.formregister.value.number, this.formregister.value.age).subscribe(
      result => {
        if(result==null){
          this.message='credenciales invalidas';
          console.log('no'); 
        }else{
          this.user=JSON.parse(JSON.stringify(result))
          this.route.navigate(['/home']);
          console.log('yes'); 
        }
      }
    )
  }
}
