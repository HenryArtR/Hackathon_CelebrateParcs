import { Injectable } from '@angular/core';
import { DataCard } from '../interfaces/dataCard.interface';

@Injectable({
  providedIn: 'root'
})
export class DataPagesService {

  cardData: DataCard[] = [
    {
      title: 'Barri',
      img: 'assets/img/card-img-1.png'
    },
    {
      title: 'Tots els parcs',
      img: 'assets/img/card-img-1.png'
    },
    {
      title: 'Codig Postal',
      img: 'assets/img/card-img-1.png'
    },
  ]


  constructor() { }
}
