import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../../../shared/badge/badge';
import { AlertComponent } from '../../../shared/alert/alert';

export interface CheckoutPlan {
  tier: 'Gold' | 'Superior' | 'Black';
  price: number;
  nights: number;
  points: string;
}

@Component({
  selector: 'app-checkout-summary',
  standalone: true,
  imports: [BadgeComponent, AlertComponent],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class CheckoutSummaryComponent {
  @Input() plan!: CheckoutPlan;
}
