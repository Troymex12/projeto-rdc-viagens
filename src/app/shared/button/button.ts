import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'rdc-button',
  standalone: true,
  imports: [IconComponent],
  template: `
    <button [class]="btnClass" [disabled]="disabled" (click)="onClick.emit($event)">
      @if (leadingIcon) { <rdc-icon [name]="leadingIcon" [size]="16" /> }
      <ng-content />
      @if (trailingIcon) { <rdc-icon [name]="trailingIcon" [size]="16" /> }
    </button>
  `,
  styles: [`
    button {
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      border: none;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
      transition: all 200ms cubic-bezier(.2,0,0,1);
      white-space: nowrap;
      cursor: pointer;
    }
    button:disabled { opacity: 0.4; cursor: not-allowed; }

    /* sizes */
    .btn-sm { padding: 8px 14px; font-size: 13px; }
    .btn-md { padding: 12px 20px; font-size: 15px; }
    .btn-lg { padding: 14px 28px; font-size: 16px; }

    /* variants */
    .btn-primary {
      background: #FF7A00; color: #fff;
      box-shadow: 0 8px 20px rgba(255,122,0,0.25);
    }
    .btn-primary:hover:not(:disabled) { background: #e86e00; }

    .btn-secondary { background: #0A2540; color: #fff; }
    .btn-secondary:hover:not(:disabled) { background: #13365A; }

    .btn-ghost {
      background: transparent; color: #0A2540;
      border: 1.5px solid #D1D5DB;
    }
    .btn-ghost:hover:not(:disabled) { background: #F7F9FC; }

    .btn-link {
      background: transparent; color: #008F8F;
      padding: 8px 8px !important;
    }
    .btn-link:hover:not(:disabled) { text-decoration: underline; }

    .btn-teal { background: #00A8A8; color: #fff; }
    .btn-teal:hover:not(:disabled) { background: #007878; }
  `],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' | 'link' | 'teal' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() leadingIcon = '';
  @Input() trailingIcon = '';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<Event>();

  get btnClass() {
    return `btn-${this.size} btn-${this.variant}`;
  }
}
