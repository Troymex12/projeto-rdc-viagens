import { Component } from '@angular/core';

@Component({
  selector: 'app-trust-strip',
  standalone: true,
  templateUrl: './trust-strip.html',
  styleUrl: './trust-strip.scss',
})
export class TrustStripComponent {
  stats = [
    { n: '+450', l: 'Hotéis parceiros' },
    { n: '+38.000', l: 'Assinantes' },
    { n: '4.8/5', l: 'Avaliação média' },
    { n: '97%', l: 'Retenção anual' },
  ];
}
