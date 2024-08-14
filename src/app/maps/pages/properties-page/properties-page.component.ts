import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../../alone/components/counter-alone/counter-alone.component';

interface House {
  title: string;
  description: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {

  public houses: House[] = [
    {
      title: 'Residential House, Canada',
      description: 'Beautiful property in Katana, Canada',
      lngLat: [ -75.92722289474008, 45.280015511264466]
    },
    {
      title: 'Beach House, Mexico',
      description: 'Beautiful beach house in Acapulco, Mexico',
      lngLat: [ -99.91287720907991, 16.828940930185748]
    },
    {
      title: 'Apartment, Argentina',
      description: 'Luxurious apartment in the heart of Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ]
    },
    {
      title: 'Commercial Space, Spain',
      description: 'Commercial space available in Madrid, Spain, near El Jardín Secreto.',
      lngLat: [ -3.7112735618380177, 40.42567285425766 ]
    },
  ]


}
