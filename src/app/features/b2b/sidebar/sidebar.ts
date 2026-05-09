import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from '../../../shared/icon/icon';
import { LogoComponent } from '../../../shared/logo/logo';

export type B2bSection = 'dash' | 'employees' | 'reports' | 'billing' | 'settings';

interface NavItem { id: B2bSection; label: string; icon: string; }

@Component({
  selector: 'app-b2b-sidebar',
  standalone: true,
  imports: [IconComponent, LogoComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class B2bSidebarComponent {
  @Input() active: B2bSection = 'dash';
  @Output() nav = new EventEmitter<B2bSection>();

  items: NavItem[] = [
    { id: 'dash',      label: 'Dashboard',       icon: 'home'     },
    { id: 'employees', label: 'Colaboradores',    icon: 'users'    },
    { id: 'reports',   label: 'Uso & relatórios', icon: 'trend'    },
    { id: 'billing',   label: 'Faturamento',      icon: 'card'     },
    { id: 'settings',  label: 'Configurações',    icon: 'settings' },
  ];
}
