import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {

  @ViewChild('map') public divMap?: ElementRef
  @Input() lngLat?: [number, number]

  public map?: Map
  public currentLngLat: LngLat = new LngLat(-3.6674605533050055, 40.399338398353024)

  ngAfterViewInit(): void {
    if ( !this.divMap?.nativeElement ) throw "Map Div not found"
    if ( !this.lngLat ) throw "LngLat can't be null"

    //map
    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive: false
    })

    // marker
    new Marker()
      .setLngLat (this.lngLat )
      .addTo( this.map )
  }

}
