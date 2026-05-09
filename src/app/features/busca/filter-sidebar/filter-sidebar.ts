import { Component } from '@angular/core';
import { IconComponent } from '../../../shared/icon/icon';

export interface FilterItem {
  label: string;
  count: number;
  checked: boolean;
}

export interface FilterGroup {
  title: string;
  items: FilterItem[];
}

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './filter-sidebar.html',
  styleUrl: './filter-sidebar.scss',
})
export class FilterSidebarComponent {
  groups: FilterGroup[] = [
    {
      title: 'Pagamento',
      items: [
        { label: 'Pagar com noites', count: 48, checked: true },
        { label: 'Noites + pontos',  count: 32, checked: false },
        { label: 'Só dinheiro',      count: 156, checked: false },
      ],
    },
    {
      title: 'Classificação',
      items: [
        { label: '5 estrelas', count: 24, checked: false },
        { label: '4 estrelas', count: 86, checked: true },
        { label: '3 estrelas', count: 42, checked: false },
      ],
    },
    {
      title: 'Comodidades',
      items: [
        { label: 'Wi-Fi grátis',     count: 198, checked: true },
        { label: 'Piscina',          count: 112, checked: false },
        { label: 'Café da manhã',    count: 164, checked: false },
        { label: 'Academia',         count: 78,  checked: false },
      ],
    },
  ];

  toggle(item: FilterItem) {
    item.checked = !item.checked;
  }
}
