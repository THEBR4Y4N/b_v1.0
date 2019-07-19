import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterpageComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(
    public authService:AuthService,
    public router:Router

  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then((res)=>{
      this.router.navigate(['/'])

    }).catch((err)=>{
      console.log('Error al Crear');
      console.log(err);
    })
  }
}
