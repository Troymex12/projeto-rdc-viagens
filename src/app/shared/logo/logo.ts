import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rdc-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="logo-wrap">
      <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" [attr.fill]="bgColor" />
        <path d="M20 40 L32 18 L44 40 M24.5 32 H39.5"
          stroke="#00A8A8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <circle cx="44" cy="22" r="3" fill="#FF7A00" />
      </svg>
      <div class="logo-text">
        <span class="logo-rdc" [style.fontSize.px]="size * 0.55" [style.color]="textColor">RDC</span>
        <span class="logo-viagens" [style.fontSize.px]="size * 0.32" [style.color]="subColor">VIAGENS</span>
      </div>
    </div>
  `,
  styles: [`
    .logo-wrap {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }
    .logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1;
    }
    .logo-rdc {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .logo-viagens {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      letter-spacing: 0.14em;
      margin-top: 2px;
    }
  `],
})
export class LogoComponent {
  @Input() variant: 'primary' | 'light' = 'primary';
  @Input() size = 32;

  get textColor() { return this.variant === 'light' ? '#fff' : '#0A2540'; }
  get subColor() { return this.variant === 'light' ? '#CEDCEC' : '#6B7280'; }
  get bgColor() { return this.variant === 'light' ? '#fff' : '#0A2540'; }
}
