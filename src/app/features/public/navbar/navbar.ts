import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LogoComponent } from '../../../shared/logo/logo';
import { ButtonComponent } from '../../../shared/button/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, ButtonComponent, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  @Input() active = 'planos';

  links = [
    { id: 'planos', label: 'Planos', route: '/planos' },
    { id: 'hoteis', label: 'Hotéis Conveniados', route: '/hoteis' },
    { id: 'destinos', label: 'Destinos', route: '/destinos' },
    { id: 'empresas', label: 'Para empresas', route: '/empresas' },
    { id: 'blog', label: 'Blog', route: '/blog' },
    { id: 'faq', label: 'Ajuda' },
  ];

  constructor(private router: Router) {}

  goLogin() { this.router.navigate(['/login']); }
  goAssinar() { this.router.navigate(['/checkout']); }
}
