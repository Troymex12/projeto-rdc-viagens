import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const ICON_PATHS: Record<string, string> = {
  home: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  search: 'M21 21l-4.3-4.3 M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14',
  calendar: 'M16 2v4 M8 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2',
  user: 'M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 20c0-4 4-6 8-6s8 2 8 6',
  users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M17 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2 M22 21v-2a4 4 0 0 0-3-3.87',
  bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0',
  pin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0 M9 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0',
  card: 'M2 5h20v14H2z M2 10h20',
  star: 'M12 2l3 7 7 0.5-5 5 1.5 7.5-6.5-4-6.5 4L7 14.5l-5-5L9 9',
  heart: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z',
  check: 'M20 6 9 17l-5-5',
  arrowRight: 'M5 12h14 M13 5l7 7-7 7',
  arrowLeft: 'M19 12H5 M11 5l-7 7 7 7',
  chevronDown: 'm6 9 6 6 6-6',
  chevronRight: 'm9 6 6 6-6 6',
  plus: 'M12 5v14 M5 12h14',
  minus: 'M5 12h14',
  close: 'M18 6 6 18 M6 6l12 12',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54z',
  wifi: 'M5 12a10 10 0 0 1 14 0 M8.5 15.5a5 5 0 0 1 7 0 M12 20h.01 M2 8.82a15 15 0 0 1 20 0',
  coffee: 'M17 8h1a4 4 0 1 1 0 8h-1 M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z M6 2v2 M10 2v2 M14 2v2',
  pool: 'M2 20h20 M2 16h20 M7 20V6a3 3 0 0 1 6 0v14 M13 11h4',
  dumbbell: 'M6 5v14 M18 5v14 M2 9v6 M22 9v6 M6 12h12',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  trend: 'M23 6 13.5 15.5 8.5 10.5 1 18 M17 6h6v6',
  money: 'M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  hotel: 'M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14 M3 21h18 M7 9h.01 M11 9h.01 M15 9h.01 M7 13h.01 M11 13h.01 M15 13h.01 M9 21v-4a3 3 0 0 1 6 0v4',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20 M2 12h20 M12 2a15 15 0 0 1 0 20 M12 2a15 15 0 0 0 0 20',
  logout: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9',
  menu: 'M3 12h18 M3 6h18 M3 18h18',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20 M12 6v6l4 2',
  lock: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2 M7 11V7a5 5 0 0 1 10 0v4',
  info: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20 M12 16v-4 M12 8h.01',
  eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8 M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2 M22 6l-10 7L2 6',
  trash: 'M3 6h18 M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6',
  edit: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z',
  plane: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5L3 7.7c-.2.4 0 .9.4 1.1L9 12l-3 3-3-1-1 1 4 2 2 4 1-1-1-3 3-3 3.5 5.6c.2.4.7.6 1.1.4l1-.6c.4-.2.6-.6.5-1.1',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10',
  briefcase: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16 M3 8h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2 M8 8V4h8v4',
  trendingUp: 'm23 6-9.5 9.5-5-5L1 18 M17 6h6v6',
  checkCircle: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01l-3-3',
  fileText: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
  creditCard: 'M2 5h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2 M2 10h20',
  qrCode: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M7 7H6 M18 7h-1 M7 18h-1 M14 14h3 M17 17h3 M14 21h3 M17 14h3 M21 21v-3 M21 14v3',
  circle: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20',
  award: 'M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14 M8.21 13.89 7 23l5-3 5 3-1.21-9.12',
};

@Component({
  selector: 'rdc-icon',
  standalone: true,
  template: `
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24"
      [attr.fill]="name === 'star' ? color : 'none'"
      [attr.stroke]="color"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round" stroke-linejoin="round"
      style="flex-shrink:0;display:block"
      [innerHTML]="svgContent">
    </svg>
  `,
})
export class IconComponent implements OnChanges {
  @Input() name = '';
  @Input() size = 20;
  @Input() color = 'currentColor';
  @Input() strokeWidth = 1.75;

  svgContent: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    const d = ICON_PATHS[this.name];
    if (!d) { this.svgContent = ''; return; }
    const paths = d.split(' M').map((seg, i) =>
      `<path d="${(i === 0 ? '' : 'M') + seg}"/>`
    ).join('');
    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(paths);
  }
}
