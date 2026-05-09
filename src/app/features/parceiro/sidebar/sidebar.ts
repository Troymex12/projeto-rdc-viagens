import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from '../../../shared/icon/icon';
import { LogoComponent } from '../../../shared/logo/logo';

export type ParceiroSection = 'dash' | 'availability' | 'rates' | 'reservations' | 'reviews';

interface NavItem { id: ParceiroSection; label: string; icon: string; }

@Component({
  selector: 'app-parceiro-sidebar',
  standalone: true,
  imports: [IconComponent, LogoComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class ParceiroSidebarComponent {
  @Input() active: ParceiroSection = 'dash';
  @Output() nav = new EventEmitter<ParceiroSection>();

  items: NavItem[] = [
    { id: 'dash',          label: 'Dashboard',      icon: 'home'     },
    { id: 'availability',  label: 'Disponibilidade', icon: 'calendar' },
    { id: 'rates',         label: 'Tarifas',         icon: 'money'    },
    { id: 'reservations',  label: 'Reservas',        icon: 'users'    },
    { id: 'reviews',       label: 'Avaliações',      icon: 'star'     },
  ];
}
