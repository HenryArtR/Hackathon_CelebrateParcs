import { Component, OnInit } from '@angular/core';
import { DataParcs } from 'src/app/interfaces/dataParc.interface';
import { ParcService } from 'src/app/services/parc.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent implements OnInit {

  dataParc: DataParcs[] = []

  constructor(private getData: ParcService) { }

  ngOnInit(): void {
    this.getData.getAllParcs().subscribe(data => {
      this.dataParc = data
    })
  }

}
