import {Injectable} from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map;

  initMap(data) {
    this.map = L.map('map', {
      center: [data.lat, data.lng],
      zoom: 3
    });
    let LeafIcon = L.Icon.extend({
      options: {
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
      }
    });
    let greenIcon = new LeafIcon({
      iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
      shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
    })
    L.marker([data.lat, data.lng], {icon: greenIcon}).addTo(this.map);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 14,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }
}
