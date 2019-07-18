import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterpageComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(
    public authService:AuthService

  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then((res)=>{
      console.log('Creado');
      console.log(res);
    }).catch((err)=>{
      console.log('Error al Crear');
      console.log(err);
    })
  }
}
