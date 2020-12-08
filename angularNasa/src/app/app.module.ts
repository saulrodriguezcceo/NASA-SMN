import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NasaComponent } from './nasa/nasa.component';
import { GobiernoComponent } from './gobierno/gobierno.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FavoritosComponent } from './favoritos/favoritos.component';
@NgModule({
  declarations: [
    AppComponent,
    NasaComponent,
    GobiernoComponent,
    NavbarComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
