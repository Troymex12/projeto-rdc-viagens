import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo';
import { IconComponent } from '../../../shared/icon/icon';

export type PortalSection =
  | 'home'
  | 'hotels'
  | 'res'
  | 'nights'
  | 'points'
  | 'finance'
  | 'profile'
  | 'settings';

export interface NavItem { id: PortalSection; label: string; icon: string; }

@Component({
  selector: 'app-portal-sidebar',
  standalone: true,
  imports: [LogoComponent, IconComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class PortalSidebarComponent {
  @Input() active: PortalSection = 'home';
  @Output() nav = new EventEmitter<PortalSection>();

  menuItems: NavItem[] = [
    { id: 'home',   label: 'Início',            icon: 'home' },
    { id: 'hotels', label: 'Hotéis conveniados', icon: 'hotel' },
    { id: 'res',    label: 'Reservas',          icon: 'calendar' },
    { id: 'nights', label: 'Minhas noites',     icon: 'hotel' },
    { id: 'points', label: 'Pontos',            icon: 'star' },
    { id: 'finance', label: 'Financeiro',       icon: 'card' },
  ];

  accountItems: NavItem[] = [
    { id: 'profile',  label: 'Perfil',        icon: 'user' },
    { id: 'settings', label: 'Configurações', icon: 'settings' },
  ];
}

