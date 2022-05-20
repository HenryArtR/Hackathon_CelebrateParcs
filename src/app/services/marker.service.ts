import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  park: string = 'https://hackaton-parks.herokuapp.com/park/getAll';

  constructor(
    private http: HttpClient,
    private popupService: PopupService) { }

  makeParksMarkers(map: L.Map): void {
    this.http.get(this.park).subscribe((res: any) => {
      for (const c of res) {
        const lon = parseFloat(c.geo_epgs_25831_x);
        const lat = parseFloat(c.geo_epgs_25831_y);
        
        //const marker = L.marker([lat, lon]);
        const marker = L.marker([41.400, 2.206]);

        
        marker.bindPopup(this.popupService.makeParksPopup(c));

        marker.addTo(map);

        console.log(parseFloat(c.geo_epgs_25831_x));
        console.log(L.latLng);

        console.log("marker"+L.marker);
        console.log(c.name);
        console.log(lat+ " " +lon)
      }
    });


   }
}
