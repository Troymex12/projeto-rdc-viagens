import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destination-tile',
  standalone: true,
  templateUrl: './destination-tile.html',
  styleUrl: './destination-tile.scss',
})
export class DestinationTileComponent {
  @Input() image = '';
  @Input() name = '';
  @Input() hotels = 0;

  get bgImage() {
    return `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,37,64,0.8) 100%), url(${this.image})`;
  }
}
