import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ApisService } from '../apis.service'

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  bandera:boolean;
  bandera2:boolean;
  res:any;
  constructor(private formBuilder: FormBuilder, public apis:ApisService) {this.bandera2=false; }
  fecha=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  enviar(){
    
    let datos ={
      fecha: this.fecha.value,
      key:'XpxjFrQKUeb1kuy5mZ7mLjDkWc2S1Ao5ZG6kl6vU'
    }
    console.log(datos.fecha);
    
    this.apis.sendFecha("http://localhost:3000/sendfecha",datos).subscribe(
      data => {
        this.bandera2=true;
        let res:any = data; 
        console.log(
          `Todo salio perfecto y se envio`
        );
        this.bandera=true;
        this.res=res;
        if(this.res==false){
          this.bandera=false;
        }
        console.log(
          `Resultado ${this.res}`
        );
      },
      err => {
        this.bandera=false;
        console.log(err);
      }
      
    );
   
  }
 
  ngOnInit(): void {
  }

}
