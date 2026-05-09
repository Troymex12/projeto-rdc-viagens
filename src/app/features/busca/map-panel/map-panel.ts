import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../shared/icon/icon';

export interface MapPinData {
  top: string;
  left: string;
  price: string;
  hotelIndex: number;
}

@Component({
  selector: 'app-map-panel',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './map-panel.html',
  styleUrl: './map-panel.scss',
})
export class MapPanelComponent {
  @Input() selectedIndex = 0;

  pins: MapPinData[] = [
    { top: '40%', left: '30%', price: '849',  hotelIndex: 0 },
    { top: '60%', left: '55%', price: '1.249', hotelIndex: 1 },
    { top: '25%', left: '70%', price: '1.089', hotelIndex: 2 },
    { top: '75%', left: '20%', price: '720',  hotelIndex: -1 },
    { top: '35%', left: '80%', price: '1.580', hotelIndex: -1 },
  ];
}
