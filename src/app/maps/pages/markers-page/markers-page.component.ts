import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string
  marker: Marker
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') public divMap?: ElementRef;

  public markers: MarkerAndColor[] = []
  public map?: Map
  public currentLngLat: LngLat = new LngLat(-3.6674605533050055, 40.399338398353024)

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'the element HTML has not been found'

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13 // starting zoom
    });

    // const marker = new Marker()
    //   .setLngLat( this.currentLngLat )
    //   .addTo( this.map )
  }

  createMarker() {
    if ( !this.map ) return

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter()

    this.addMarker( lngLat, color )
  }

  addMarker( lngLat: LngLat, color: string ) {
    if ( !this.map ) return

    const marker = new Marker({
      color: color,
      draggable: true
    })
      .setLngLat( lngLat )
      .addTo( this.map )

      this.markers.push({
        color,
        marker
      })
  }

  deleteMarker( index: number) {
    this.markers[index].marker.remove()
    this.markers.splice( index, 1 )
  }

}
