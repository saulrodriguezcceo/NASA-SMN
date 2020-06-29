import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NasaComponent}from './nasa/nasa.component';
import {GobiernoComponent} from './gobierno/gobierno.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/nasa',
    pathMatch: 'full'
  },
  {path:'nasa',component:NasaComponent},
  {path:'gobierno',component:GobiernoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
