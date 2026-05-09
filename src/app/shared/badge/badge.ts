import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon';

type BadgeVariant = 'gold' | 'superior' | 'promo' | 'new' | 'success' | 'warn' | 'error' | 'neutral' | 'info';

const STYLES: Record<BadgeVariant, { background: string; color: string }> = {
  gold:     { background: 'linear-gradient(135deg,#F5C84B 0%,#D4A017 100%)', color: '#3E2A00' },
  superior: { background: 'linear-gradient(135deg,#1E4B7A 0%,#0A2540 100%)', color: '#fff' },
  promo:    { background: '#FFE6CC', color: '#8F4500' },
  new:      { background: '#DDF4F4', color: '#005757' },
  success:  { background: '#D1FAE5', color: '#065F46' },
  warn:     { background: '#FEF3C7', color: '#92400E' },
  error:    { background: '#FEE2E2', color: '#991B1B' },
  neutral:  { background: '#EEF1F5', color: '#2E3440' },
  info:     { background: '#DCE7F5', color: '#1E40AF' },
};

@Component({
  selector: 'rdc-badge',
  standalone: true,
  imports: [IconComponent],
  template: `
    <span class="badge" [style.background]="style.background" [style.color]="style.color">
      @if (icon) { <rdc-icon [name]="icon" [size]="12" color="currentColor" /> }
      <ng-content />
    </span>
  `,
  styles: [`
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
    }
  `],
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'neutral';
  @Input() icon = '';

  get style() { return STYLES[this.variant] ?? STYLES.neutral; }
}
