import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { HeroComponent } from '../hero/hero';
import { TrustStripComponent } from '../trust-strip/trust-strip';
import { PlanCardComponent } from '../plan-card/plan-card';
import { HotelCardComponent } from '../hotel-card/hotel-card';
import { DestinationTileComponent } from '../destination-tile/destination-tile';
import { FooterComponent } from '../footer/footer';
import { ButtonComponent } from '../../../shared/button/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    TrustStripComponent,
    PlanCardComponent,
    HotelCardComponent,
    DestinationTileComponent,
    FooterComponent,
    ButtonComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  hotels = [
    {
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop',
      name: 'Pousada Maré Alta', location: 'Jericoacoara, CE',
      rating: 4.8, reviews: 284, price: '849', nights: '1 noite Gold',
      badge: { variant: 'promo', label: 'Promo −25%' }, favorited: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
      name: 'Hotel Vila Serrana', location: 'Campos do Jordão, SP',
      rating: 4.9, reviews: 512, price: '1.249', nights: '1 noite Superior',
      badge: null, favorited: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&auto=format&fit=crop',
      name: 'Resort Praia Azul', location: 'Porto de Galinhas, PE',
      rating: 4.7, reviews: 421, price: '1.089', nights: '',
      badge: null, favorited: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop',
      name: 'Refúgio Amazônia', location: 'Manaus, AM',
      rating: 4.9, reviews: 198, price: '1.430', nights: '1 noite Superior',
      badge: { variant: 'new', label: 'Novo' }, favorited: false,
    },
  ];

  destinations = [
    { image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&auto=format&fit=crop', name: 'Rio de Janeiro', hotels: 42 },
    { image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop', name: 'Fernando de Noronha', hotels: 14 },
    { image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop', name: 'Serra Gaúcha', hotels: 38 },
    { image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&auto=format&fit=crop', name: 'Chapada Diamantina', hotels: 26 },
  ];

  goldPerks = [
    '6 noites por ano em hotéis selecionados',
    '12.000 pontos inclusos',
    'Suporte por WhatsApp',
    'Reembolso em até 7 dias',
  ];

  superiorPerks = [
    '14 noites por ano em toda a rede',
    '30.000 pontos + upgrades',
    'Concierge dedicado 24/7',
    'Cancelamento flexível',
    'Acesso a experiências exclusivas',
  ];
}
