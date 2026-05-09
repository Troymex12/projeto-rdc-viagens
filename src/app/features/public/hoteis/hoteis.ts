import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar';
import { HotelCardComponent, HotelBadge } from '../hotel-card/hotel-card';
import { ButtonComponent } from '../../../shared/button/button';

interface ConveniadoHotel {
  image: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  nights: string;
  badge: HotelBadge | null;
  favorited: boolean;
}

@Component({
  selector: 'app-hoteis-conveniados',
  standalone: true,
  imports: [NavbarComponent, HotelCardComponent, ButtonComponent, FormsModule, RouterLink],
  templateUrl: './hoteis.html',
  styleUrl: './hoteis.scss',
})
export class HoteisConveniadosComponent {
  q = '';

  hotels: ConveniadoHotel[] = [
    {
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop',
      name: 'Pousada Maré Alta',
      location: 'Jericoacoara, CE',
      rating: 4.8,
      reviews: 284,
      price: '849',
      nights: '1 noite Gold',
      badge: { variant: 'promo', label: 'Promo −25%' },
      favorited: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
      name: 'Hotel Vila Serrana',
      location: 'Campos do Jordão, SP',
      rating: 4.9,
      reviews: 512,
      price: '1.249',
      nights: '1 noite Superior',
      badge: null,
      favorited: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop',
      name: 'Refúgio Amazônia',
      location: 'Manaus, AM',
      rating: 4.9,
      reviews: 198,
      price: '1.430',
      nights: '1 noite Superior',
      badge: { variant: 'new', label: 'Novo' },
      favorited: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&auto=format&fit=crop',
      name: 'Resort Praia Azul',
      location: 'Porto de Galinhas, PE',
      rating: 4.7,
      reviews: 421,
      price: '1.089',
      nights: '',
      badge: null,
      favorited: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&auto=format&fit=crop',
      name: 'Serra Boutique Hotel',
      location: 'Gramado, RS',
      rating: 4.8,
      reviews: 166,
      price: '1.190',
      nights: '2 noites + pts',
      badge: null,
      favorited: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?w=800&auto=format&fit=crop',
      name: 'Hotel Atlântico',
      location: 'Rio de Janeiro, RJ',
      rating: 4.6,
      reviews: 604,
      price: '980',
      nights: '1 noite Gold',
      badge: null,
      favorited: false,
    },
  ];

  get filtered(): ConveniadoHotel[] {
    const q = this.q.trim().toLowerCase();
    if (!q) return this.hotels;
    return this.hotels.filter(h =>
      `${h.name} ${h.location}`.toLowerCase().includes(q)
    );
  }
}

