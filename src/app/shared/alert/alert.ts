import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon';

type AlertVariant = 'info' | 'success' | 'warn' | 'error';

@Component({
  selector: 'rdc-alert',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="alert" [class]="'alert-' + variant">
      <rdc-icon [name]="iconName" [size]="20" color="currentColor" [strokeWidth]="2.25" />
      <div>
        @if (title) { <div class="alert-title">{{ title }}</div> }
        <div class="alert-body"><ng-content /></div>
      </div>
    </div>
  `,
  styles: [`
    .alert {
      display: flex;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 12px;
      align-items: flex-start;
    }
    .alert-title { font-weight: 600; font-size: 14px; margin-bottom: 2px; }
    .alert-body { font-size: 13px; line-height: 1.5; }
    .alert-info    { background: #EFF6FF; color: #1E40AF; }
    .alert-success { background: #ECFDF5; color: #065F46; }
    .alert-warn    { background: #FFFBEB; color: #92400E; }
    .alert-error   { background: #FEF2F2; color: #991B1B; }
  `],
})
export class AlertComponent {
  @Input() variant: AlertVariant = 'info';
  @Input() title = '';

  get iconName() {
    const map: Record<AlertVariant, string> = { info: 'info', success: 'check', warn: 'info', error: 'close' };
    return map[this.variant];
  }
}
