import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BadgeComponent } from '../../../shared/badge/badge';
import { ButtonComponent } from '../../../shared/button/button';
import { IconComponent } from '../../../shared/icon/icon';

export interface HotelAmenity { icon: string; label: string; }
export interface HotelRowBadge { variant: string; label: string; }

export interface HotelRowData {
  name: string;
  location: string;
  stars: number;
  rating: string;
  reviews: number;
  price: string;
  oldPrice?: string;
  nights: string;
  badge?: HotelRowBadge;
  image: string;
  amenities: HotelAmenity[];
}

@Component({
  selector: 'app-hotel-row',
  standalone: true,
  imports: [BadgeComponent, ButtonComponent, IconComponent],
  templateUrl: './hotel-row.html',
  styleUrl: './hotel-row.scss',
})
export class HotelRowComponent {
  @Input() hotel!: HotelRowData;
  @Input() selected = false;
  @Output() rowClick = new EventEmitter<void>();
}
