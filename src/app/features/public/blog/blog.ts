import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';
import { BadgeComponent } from '../../../shared/badge/badge';
import { IconComponent } from '../../../shared/icon/icon';
import { ButtonComponent } from '../../../shared/button/button';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    BadgeComponent,
    IconComponent,
    ButtonComponent
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent {
  posts = [
    {
      title: 'Guia definitivo: Como planejar sua viagem com pontos RDC',
      excerpt: 'Aprenda a maximizar seus benefícios e viajar para os melhores destinos sem gastar mais por isso.',
      category: 'Dicas',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&auto=format&fit=crop',
      readTime: 5
    },
    {
      title: 'Os 10 hotéis mais luxuosos da nossa rede para 2026',
      excerpt: 'Selecionamos as estadias que prometem elevar o padrão da sua próxima viagem de férias.',
      category: 'Destinos',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop',
      readTime: 8
    },
    {
      title: 'Novas parcerias internacionais: RDC chega à Europa',
      excerpt: 'Agora você pode usar seus pontos em hotéis selecionados em Paris, Lisboa e Roma.',
      category: 'RDC News',
      image: 'https://images.unsplash.com/photo-1493134790188-19e598744830?w=500&auto=format&fit=crop',
      readTime: 4
    },
    {
      title: 'Viagem em família: Os melhores resorts All Inclusive',
      excerpt: 'Diversão para as crianças e descanso para os pais nos melhores resorts do Brasil.',
      category: 'Dicas',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500&auto=format&fit=crop',
      readTime: 6
    },
    {
      title: 'Roteiro de 7 dias pela Serra Gaúcha no inverno',
      excerpt: 'Descubra os encantos de Gramado e Canela com dicas exclusivas para sócios RDC.',
      category: 'Destinos',
      image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=500&auto=format&fit=crop',
      readTime: 7
    },
    {
      title: 'Entenda como funciona o sistema de reserva antecipada',
      excerpt: 'Garanta sua vaga nos períodos mais concorridos do ano seguindo este passo a passo.',
      category: 'RDC News',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop',
      readTime: 3
    }
  ];
}
