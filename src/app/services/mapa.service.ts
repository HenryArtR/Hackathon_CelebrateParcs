/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parks } from '../components/models/park';

@Injectable({
    providedIn: 'root'
  })
  export class MapaService {
    url: string = 'https://hackaton-parks.herokuapp.com/park/';
    endPoint: string = 'getAll';
    token!: string;
  
    constructor(
      private httpClient: HttpClient,
    ) {}
  
     getAll<Parks>() {
      return this.httpClient.get<Parks>(`${this.url}${this.endPoint}`);
    }
    getParksByHood(hood: string){
      return this.httpClient.get(hood);
    }
  }*/
  
  