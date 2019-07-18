import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomepageComponent} from './componentes/home-page/home-page.component';
import{LoginpageComponent} from './componentes/login-page/login-page.component';
import{RegisterpageComponent} from './componentes/register-page/register-page.component';
import{PrivadopageComponent} from './componentes/privado-page/privado-page.component';
import{NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'login',component:LoginpageComponent},
  {path:'register',component:RegisterpageComponent},
  {path:'Privado',component:PrivadopageComponent},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
