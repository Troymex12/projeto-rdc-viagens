import { Component, Input } from '@angular/core';

@Component({
  selector: 'rdc-card',
  standalone: true,
  template: `
    <div class="card" [class.card-hover]="hover" [style.padding.px]="padding">
      <ng-content />
    </div>
  `,
  styles: [`
    .card {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(10,37,64,0.06), 0 2px 4px rgba(10,37,64,0.04);
      transition: all 200ms cubic-bezier(.2,0,0,1);
    }
    .card-hover:hover {
      box-shadow: 0 12px 32px rgba(10,37,64,0.08), 0 4px 12px rgba(10,37,64,0.04);
      transform: translateY(-2px);
    }
  `],
})
export class CardComponent {
  @Input() padding = 24;
  @Input() hover = false;
}
