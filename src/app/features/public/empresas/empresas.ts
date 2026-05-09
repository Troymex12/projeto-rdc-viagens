import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';
import { BadgeComponent } from '../../../shared/badge/badge';
import { IconComponent } from '../../../shared/icon/icon';
import { InputComponent } from '../../../shared/input/input';
import { ButtonComponent } from '../../../shared/button/button';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    BadgeComponent,
    IconComponent,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './empresas.html',
  styleUrl: './empresas.scss'
})
export class EmpresasComponent {
  onSubmit() {
    console.log('Proposta solicitada');
    // Implement proposal logic
  }
}
