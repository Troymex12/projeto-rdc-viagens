import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';
import { BadgeComponent } from '../../../shared/badge/badge';
import { IconComponent } from '../../../shared/icon/icon';
import { ButtonComponent } from '../../../shared/button/button';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    BadgeComponent,
    IconComponent,
    ButtonComponent
  ],
  templateUrl: './planos.html',
  styleUrl: './planos.scss'
})
export class PlanosComponent {
  constructor(private router: Router) {}

  selectPlan(plan: string) {
    console.log('Plano selecionado:', plan);
    this.router.navigate(['/login'], { queryParams: { tab: 'cadastro', plan } });
  }
}
