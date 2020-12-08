import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private httpClient: HttpClient) { }

  sendFecha(url, data) {
    return this.httpClient.post(url, data);
  }
  sendClimas(url){
     return (this.httpClient.get(url)).pipe(map((data:any)=>data["results"]));
  }
  getClimates(url, data){
    return this.httpClient.post(url, data);
 }
 saveDate(url, data){
  return this.httpClient.post(url, data);
}
}
