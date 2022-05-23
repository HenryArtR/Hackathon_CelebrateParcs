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

        const geoXPart1 = c.geo_epgs_4326_x.replace(/\.+/g, '');
        const geoYPart1 = c.geo_epgs_4326_y.replace(/\.+/g, '');

        const geoXDots = geoXPart1.substring(0, 2) + "." + geoXPart1.substring(2, geoXPart1.length);
        const geoYDots = geoYPart1.substring(0, 1) + "." + geoYPart1.substring(1, geoYPart1.length);

        const lat = parseFloat(geoXDots);
        const lon = parseFloat(geoYDots);

        const marker = L.marker([lat, lon]);
        
        marker.bindPopup(this.popupService.makeParksPopup(c));

        marker.addTo(map);
      }
    });
   }
}
