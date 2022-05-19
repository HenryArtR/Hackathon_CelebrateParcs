import { Component, OnInit } from '@angular/core';
import { DataCard } from 'src/app/interfaces/dataCard.interface';
import { DataPagesService } from 'src/app/services/data-pages.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardInfo: DataCard[] = [] 

  constructor(private dataCard: DataPagesService) { }

  ngOnInit(): void {
    this.cardInfo = this.dataCard.cardData
  }

}
