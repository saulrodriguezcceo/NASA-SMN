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

  constructor(private formBuilder: FormBuilder, public apis:ApisService) { }
  fecha=new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  enviar(){
    let datos ={
      fecha: this.fecha.value
    }
    
    this.apis.sendFecha("https://localhost:3000/sendfecha",datos).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `Todo salio perfecto y se envio`
        );
      }
    );
   
  }

  ngOnInit(): void {
  }

}
