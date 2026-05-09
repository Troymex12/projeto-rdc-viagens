import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IconComponent } from '../../../shared/icon/icon';
import { ButtonComponent } from '../../../shared/button/button';

@Component({
  selector: 'app-portal-top-bar',
  standalone: true,
  imports: [IconComponent, ButtonComponent],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
})
export class PortalTopBarComponent {
  @Input() section = 'Início';
  constructor(private router: Router) {}
  goSearch() { this.router.navigate(['/busca']); }
}
