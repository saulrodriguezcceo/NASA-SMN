import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service'
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-gobierno',
  templateUrl: './gobierno.component.html',
  styleUrls: ['./gobierno.component.css']
})
export class GobiernoComponent implements OnInit {
  state = new FormControl("", [
    Validators.required,
  ]);
  country = new FormControl("", [
    Validators.required,
  ]);
  res:any;
  constructor(public apis:ApisService) {
    this.res = false;
    /*this.apis.sendClimas("http://localhost:3000/getatmosferas").subscribe(
    data => {
      this.estados = data; 
      console.log(
        `Todo salio perfecto y se envio`
      );
     
    
    },
    err => {
      
      console.log(err);
    });*/
   }
getClimates(){
  
  let datos = {
    country: this.country.value,
    state: this.state.value,
  }
  console.log(this.country.value);
  console.log(this.state.value);

  this.apis.getClimates("http://localhost:3000/climates",datos).subscribe(
    data => {
      let res:any = data; 
      console.log(res);
      this.res = res;
    },
    err => {
      console.log(err);
    }
    
  );
  
}
  ngOnInit(): void {} 
}
