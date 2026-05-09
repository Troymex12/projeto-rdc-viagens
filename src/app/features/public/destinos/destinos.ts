import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar';
import { DestinationTileComponent } from '../destination-tile/destination-tile';
import { ButtonComponent } from '../../../shared/button/button';

interface Destination {
  image: string;
  name: string;
  hotels: number;
  region?: string;
}

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [NavbarComponent, DestinationTileComponent, ButtonComponent, FormsModule, RouterLink],
  templateUrl: './destinos.html',
  styleUrl: './destinos.scss',
})
export class DestinosComponent {
  q = '';

  destinations: Destination[] = [
    { image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&auto=format&fit=crop', name: 'Rio de Janeiro', hotels: 42, region: 'Sudeste' },
    { image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop', name: 'Fernando de Noronha', hotels: 14, region: 'Nordeste' },
    { image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop', name: 'Serra Gaúcha', hotels: 38, region: 'Sul' },
    { image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&auto=format&fit=crop', name: 'Chapada Diamantina', hotels: 26, region: 'Nordeste' },
    { image: 'https://images.unsplash.com/photo-1544735716-59a439ad6fb5?w=800&auto=format&fit=crop', name: 'Florianópolis', hotels: 31, region: 'Sul' },
    { image: 'https://images.unsplash.com/photo-1520963004505-7c21ad4ddf1b?w=800&auto=format&fit=crop', name: 'Foz do Iguaçu', hotels: 18, region: 'Sul' },
    { image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop', name: 'Salvador', hotels: 24, region: 'Nordeste' },
    { image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&auto=format&fit=crop', name: 'Bonito', hotels: 12, region: 'Centro-Oeste' },
  ];

  get filtered(): Destination[] {
    const q = this.q.trim().toLowerCase();
    if (!q) return this.destinations;
    return this.destinations.filter(d =>
      `${d.name} ${d.region ?? ''}`.toLowerCase().includes(q)
    );
  }
}

