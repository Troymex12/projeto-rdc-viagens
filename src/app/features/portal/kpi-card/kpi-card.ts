import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../shared/icon/icon';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.scss',
})
export class KpiCardComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() valueSuffix = '';
  @Input() sub = '';
  @Input() icon = 'star';
  @Input() iconColor = '#0A2540';
  @Input() iconBg = '#E8EFF7';
}
