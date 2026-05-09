import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../../shared/button/button';
import { IconComponent } from '../../../shared/icon/icon';
import { BadgeComponent } from '../../../shared/badge/badge';

interface RoomType {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent, BadgeComponent],
  templateUrl: './hotel-details.html',
  styleUrl: './hotel-details.scss',
})
export class HotelDetailsComponent implements OnInit {
  hotel = {
    name: 'Resort Alvorada Premium',
    location: 'Porto de Galinhas, Pernambuco',
    rating: 4.9,
    reviews: 1240,
    description: `Descubra o auge do luxo e do conforto no Resort Alvorada Premium. Localizado nas areias brancas de Porto de Galinhas, nosso resort oferece uma experiência inigualável com piscinas infinitas, gastronomia de classe mundial e suítes com vista panorâmica para o oceano.
    
    Cada detalhe foi planejado para proporcionar relaxamento e exclusividade. Seja em um jantar romântico sob as estrelas ou em um dia de spa revigorante, sua estadia será marcada por momentos memoráveis e um serviço impecável.`,
    amenities: [
      { icon: 'wifi', label: 'Wi-Fi Ultra-rápido' },
      { icon: 'pool', label: 'Piscinas Infinitas' },
      { icon: 'coffee', label: 'Café da Manhã Gourmet' },
      { icon: 'dumbbell', label: 'Fitness Center 24h' },
      { icon: 'hotel', label: 'Spa & Wellness' },
      { icon: 'users', label: 'Kids Club' }
    ],
    rooms: [
      { 
        name: 'Luxo Vista Mar', 
        description: 'Varanda privativa com rede e vista frontal para as piscinas naturais.',
        price: 0, 
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600'
      },
      { 
        name: 'Suíte Master Family', 
        description: 'Dois ambientes integrados, ideal para até 4 pessoas com todo conforto.',
        price: 85, 
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600'
      },
      { 
        name: 'Bangalô Exclusive', 
        description: 'Privacidade total com piscina privativa e acesso direto à praia.',
        price: 150, 
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600'
      }
    ]
  };

  selectedRoom = this.hotel.rooms[0];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  goBack() {
    window.history.back();
  }

  goBooking() {
    this.router.navigate(['/checkout'], { queryParams: { hotel: this.hotel.name } });
  }
}
