import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BadgeComponent } from '../../../shared/badge/badge';
import { ButtonComponent } from '../../../shared/button/button';
import { IconComponent } from '../../../shared/icon/icon';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [BadgeComponent, ButtonComponent, IconComponent],
  templateUrl: './plan-card.html',
  styleUrl: './plan-card.scss',
})
export class PlanCardComponent {
  @Input() tier: 'Gold' | 'Superior' | 'Black' = 'Gold';
  @Input() price = 199;
  @Input() period = 'mês';
  @Input() perks: string[] = [];
  @Input() highlighted = false;
  @Output() select = new EventEmitter<void>();

  get isGold() { return this.tier === 'Gold'; }
  get isBlack() { return this.tier === 'Black'; }
  
  get bandBg() {
    if (this.isGold) return 'linear-gradient(135deg,#F5C84B 0%,#D4A017 100%)';
    if (this.isBlack) return 'linear-gradient(135deg,#111827 0%,#1f2937 100%)';
    return 'linear-gradient(135deg,#1E4B7A 0%,#0A2540 100%)';
  }
  get bandColor() { 
    if (this.isBlack) return '#F5C84B'; // Gold text on black
    return this.isGold ? '#3E2A00' : '#fff'; 
  }
  get anualPrice() { return this.price * 10; }
}
