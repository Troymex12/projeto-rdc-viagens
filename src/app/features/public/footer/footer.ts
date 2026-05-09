import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  cols = [
    { title: 'Produto', links: ['Planos', 'Destinos', 'Hotéis parceiros', 'Para empresas'] },
    { title: 'Ajuda', links: ['Central de ajuda', 'Termos', 'Privacidade', 'Contato'] },
    { title: 'Empresa', links: ['Sobre', 'Blog', 'Imprensa', 'Carreiras'] },
  ];
}
