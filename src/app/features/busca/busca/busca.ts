import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchHeaderComponent } from '../search-header/search-header';
import { FilterSidebarComponent } from '../filter-sidebar/filter-sidebar';
import { HotelRowComponent, HotelRowData } from '../hotel-row/hotel-row';
import { MapPanelComponent } from '../map-panel/map-panel';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [FormsModule, SearchHeaderComponent, FilterSidebarComponent, HotelRowComponent, MapPanelComponent],
  templateUrl: './busca.html',
  styleUrl: './busca.scss',
})
export class BuscaComponent {
  selectedIndex = 0;

  hotels: HotelRowData[] = [
    {
      name: 'Pousada Maré Alta',
      location: 'Jericoacoara, CE',
      stars: 4,
      rating: '9.2',
      reviews: 284,
      price: '2.547',
      oldPrice: '3.396',
      nights: '3 noites Gold',
      badge: { variant: 'promo', label: '−25%' },
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop',
      amenities: [
        { icon: 'wifi', label: 'Wi-Fi' },
        { icon: 'pool', label: 'Piscina' },
        { icon: 'coffee', label: 'Café' },
      ],
    },
    {
      name: 'Hotel Vila Serrana',
      location: 'Campos do Jordão, SP',
      stars: 5,
      rating: '9.5',
      reviews: 512,
      price: '3.747',
      nights: '3 noites Superior',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
      amenities: [
        { icon: 'wifi',     label: 'Wi-Fi' },
        { icon: 'dumbbell', label: 'Academia' },
        { icon: 'coffee',   label: 'Restaurante' },
      ],
    },
    {
      name: 'Resort Praia Azul',
      location: 'Porto de Galinhas, PE',
      stars: 4,
      rating: '8.9',
      reviews: 421,
      price: '3.267',
      nights: '2 noites + pts',
      badge: { variant: 'new', label: 'Novo' },
      image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&auto=format&fit=crop',
      amenities: [
        { icon: 'wifi',     label: 'Wi-Fi' },
        { icon: 'pool',     label: 'Piscina' },
        { icon: 'dumbbell', label: 'Spa' },
      ],
    },
  ];

  sortOptions = ['Ordenar: Relevância', 'Menor preço', 'Melhor avaliados'];
  sortSelected = 'Ordenar: Relevância';

  selectHotel(index: number) {
    this.selectedIndex = index;
  }
}
