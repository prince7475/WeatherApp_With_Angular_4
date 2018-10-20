import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) { 
    console.log("Data Service is connected")
  }
  getPictures(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos").pipe(map(res => res.json()))
  }
}
