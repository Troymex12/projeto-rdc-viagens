import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../shared/icon/icon';

@Component({
  selector: 'app-admin-metric-card',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './metric-card.html',
  styleUrl: './metric-card.scss',
})
export class AdminMetricCardComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() delta = '';
  @Input() deltaPos = true;
  @Input() icon = '';
}
