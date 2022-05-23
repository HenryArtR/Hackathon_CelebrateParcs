import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataCard } from 'src/app/interfaces/dataCard.interface';
import { DataPagesService } from 'src/app/services/data-pages.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardInfo: DataCard[] = [] 

  constructor(private dataCard: DataPagesService, private router: Router) { }

  ngOnInit(): void {
    this.cardInfo = this.dataCard.cardData
  }

  goToPage(num: number){
    if(num == 0){
      this.router.navigate(['/hood/name'])
    }else if(num == 1){
      this.router.navigate(['/getAll'])
    }else if(num == 2){
      this.router.navigate(['/postalcode/cp'])
    }
  }

}
