import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service'
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  estados:any[]=[];
  dateList:any[] = [];
  constructor(public apis:ApisService) {
    this.apis.getDates("http://localhost:3000/list/dates").subscribe(
      data => {
        let myList=[] ;
        Object.keys(data).forEach(function (key){
          var temp = data[key].date;
          myList.push(temp);
        });
        this.dateList = myList;    
        this.iterateDates(); 
        console.log(
          `Todo salio perfecto y se envio`
        );
       
      
      },
      err => {
        
        console.log(err);
      }
      
    );
  }
  iterateDates(){
    for (let entry of this.dateList) {
      this.getDate(entry);
    }
  }
  getDate(date){
    let datos ={
      fecha: date,
      key:'XpxjFrQKUeb1kuy5mZ7mLjDkWc2S1Ao5ZG6kl6vU'
    }
    this.apis.sendFecha("http://localhost:3000/sendfecha", datos).subscribe(
      data => {
        console.log(data);
        this.estados.push(data);
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
