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
  res:any;
  constructor(private formBuilder: FormBuilder, public apis:ApisService) { }
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
    
    this.apis.sendFecha("https://localhost:3000/sendfecha",datos).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `Todo salio perfecto y se envio`
        );
        if(res.msg != null){
          this.bandera=false;
        }else if(res.title != null){
          this.bandera=true;
        }else{
          this.bandera=null;
        }
        this.res=res;
      }
      
    );
   
  }

  ngOnInit(): void {
  }

}
