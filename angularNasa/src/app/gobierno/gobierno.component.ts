import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service'

@Component({
  selector: 'app-gobierno',
  templateUrl: './gobierno.component.html',
  styleUrls: ['./gobierno.component.css']
})
export class GobiernoComponent implements OnInit {

  estados:any[]=[];
  constructor(public apis:ApisService) {

    this.apis.sendClimas("http://localhost:3000/getatmosferas").subscribe(
    data => {
      this.estados = data; 
      console.log(
        `Todo salio perfecto y se envio`
      );
     
    
    },
    err => {
      
      console.log(err);
    }
    
  );
   }

  ngOnInit(): void {
  }

  
}
