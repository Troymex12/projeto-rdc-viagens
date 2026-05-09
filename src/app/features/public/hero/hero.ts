import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BadgeComponent } from '../../../shared/badge/badge';
import { ButtonComponent } from '../../../shared/button/button';
import { InputComponent } from '../../../shared/input/input';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BadgeComponent, ButtonComponent, InputComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  dest = '';
  checkin = '';
  checkout = '';
  guests = '';

  constructor(private router: Router) {}

  onSearch() { this.router.navigate(['/busca']); }
}
