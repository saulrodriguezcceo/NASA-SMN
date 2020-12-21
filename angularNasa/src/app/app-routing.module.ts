import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NasaComponent}from './nasa/nasa.component';
import {GobiernoComponent} from './gobierno/gobierno.component';
import {FavoritosComponent} from './favoritos/favoritos.component';
import {InicioComponent} from './inicio/inicio.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {path:'nasa',component:NasaComponent},
  {path:'gobierno',component:GobiernoComponent},
  {path:'favoritos',component:FavoritosComponent},
  {path:'inicio',component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
