import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from '../../../shared/icon/icon';
import { LogoComponent } from '../../../shared/logo/logo';

export type AdminSection = 'dash' | 'users' | 'plans' | 'hotels' | 'res' | 'finance' | 'cms';

interface NavItem { id: AdminSection; label: string; icon: string; }

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [IconComponent, LogoComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class AdminSidebarComponent {
  @Input() active: AdminSection = 'dash';
  @Output() nav = new EventEmitter<AdminSection>();

  items: NavItem[] = [
    { id: 'dash',    label: 'Dashboard',  icon: 'home'     },
    { id: 'users',   label: 'Usuários',   icon: 'users'    },
    { id: 'plans',   label: 'Planos',     icon: 'star'     },
    { id: 'hotels',  label: 'Hotéis',     icon: 'hotel'    },
    { id: 'res',     label: 'Reservas',   icon: 'calendar' },
    { id: 'finance', label: 'Financeiro', icon: 'card'     },
    { id: 'cms',     label: 'Conteúdo',   icon: 'edit'     },
  ];
}
