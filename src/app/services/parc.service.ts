import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataParcs } from '../interfaces/dataParc.interface';

@Injectable({
  providedIn: 'root'
})
export class ParcService {

  url: string = 'https://hackaton-parks.herokuapp.com/park/'


  constructor(private http: HttpClient) { }

  getHoods(hood: string){
    return this.http.get<DataParcs[]>(`${this.url}hood/${hood}`)
  }
  
  getAllParcs(){
    return this.http.get<DataParcs[]>(`${this.url}getAll`)
  }

  getByCp(cp: string){
    return this.http.get<DataParcs[]>(`${this.url}postalcode/${cp}`)
  }

  getInfoById(id: string){
    return this.http.get<DataParcs[]>(`${this.url}${id}`)
  }
}
