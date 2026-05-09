import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../../shared/badge/badge';
import { CardComponent } from '../../../shared/card/card';
import { IconComponent } from '../../../shared/icon/icon';

export interface HotelBadge { variant: string; label: string; }

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [CommonModule, BadgeComponent, CardComponent, IconComponent],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.scss',
})
export class HotelCardComponent implements OnInit {
  @Input() image = '';
  @Input() name = '';
  @Input() location = '';
  @Input() rating = 0;
  @Input() reviews = 0;
  @Input() price = '';
  @Input() nights = '';
  @Input() badge: HotelBadge | null = null;
  @Input() favorited = false;
  @Output() cardClick = new EventEmitter<void>();

  private router = inject(Router);
  fav = false;

  ngOnInit() { 
    this.fav = this.favorited; 
  }

  toggleFav(e: Event) {
    e.stopPropagation();
    this.fav = !this.fav;
  }

  goDetails() {
    this.router.navigate(['/hotel', 1]);
  }
}
