import { Component } from '@angular/core';
import { AdminSidebarComponent, AdminSection } from '../sidebar/sidebar';
import { AdminMetricCardComponent } from '../metric-card/metric-card';
import { SparkChartComponent } from '../spark-chart/spark-chart';
import { BadgeComponent } from '../../../shared/badge/badge';
import { ButtonComponent } from '../../../shared/button/button';
import { IconComponent } from '../../../shared/icon/icon';
import { InputComponent } from '../../../shared/input/input';

interface AdminUser {
  name: string;
  email: string;
  plan: 'Superior' | 'Gold';
  status: 'Ativa' | 'Pendente' | 'Cancelada';
  since: string;
}

interface AdminHotel {
  name: string;
  cidade: string;
  estrelas: number;
  reservas: number;
  status: 'Ativo' | 'Inativo' | 'Pendente';
}

interface AdminReserva {
  id: string;
  guest: string;
  hotel: string;
  datas: string;
  noites: number;
  status: 'Confirmada' | 'Pendente' | 'Cancelada' | 'Concluída';
  valor: string;
}

interface AdminPlano {
  nome: string;
  preco: string;
  assinantes: number;
  noites: number;
  pts: string;
  cor: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    AdminSidebarComponent,
    AdminMetricCardComponent,
    SparkChartComponent,
    BadgeComponent,
    ButtonComponent,
    IconComponent,
    InputComponent,
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class AdminComponent {
  activeSection: AdminSection = 'dash';

  sectionLabels: Record<AdminSection, string> = {
    dash:    'Dashboard',
    users:   'Usuários',
    plans:   'Planos',
    hotels:  'Hotéis',
    res:     'Reservas',
    finance: 'Financeiro',
    cms:     'Conteúdo',
  };

  // ===== DASHBOARD =====
  metrics = [
    { label: 'Receita MRR',       value: 'R$ 1,24M', delta: '+12,4%',        deltaPos: true,  icon: 'money'    },
    { label: 'Assinantes ativos', value: '38.412',   delta: '+842 este mês', deltaPos: true,  icon: 'users'    },
    { label: 'Reservas',          value: '2.108',    delta: '+6,8%',         deltaPos: true,  icon: 'calendar' },
    { label: 'Churn',             value: '2,1%',     delta: '−0,3 p.p.',     deltaPos: true,  icon: 'trend'    },
  ];

  planMix = [
    { name: 'Superior',  pct: 62, color: '#0A2540' },
    { name: 'Gold',      pct: 34, color: '#D4A017' },
    { name: 'Corporate', pct: 4,  color: '#00A8A8' },
  ];

  // ===== USUÁRIOS =====
  users: AdminUser[] = [
    { name: 'Ana Souza',      email: 'ana@email.com',     plan: 'Superior', status: 'Ativa',     since: 'Mar 2025' },
    { name: 'Rafael Lima',    email: 'rafael@email.com',  plan: 'Gold',     status: 'Ativa',     since: 'Jan 2026' },
    { name: 'Mariana Costa',  email: 'mariana@email.com', plan: 'Gold',     status: 'Pendente',  since: 'Abr 2026' },
    { name: 'João Pereira',   email: 'joao@email.com',    plan: 'Superior', status: 'Cancelada', since: 'Nov 2024' },
    { name: 'Fernanda Rocha', email: 'fe@email.com',      plan: 'Superior', status: 'Ativa',     since: 'Fev 2026' },
    { name: 'Carlos Mendes',  email: 'carlos@email.com',  plan: 'Gold',     status: 'Ativa',     since: 'Mai 2025' },
    { name: 'Lucia Alves',    email: 'lucia@email.com',   plan: 'Gold',     status: 'Pendente',  since: 'Abr 2026' },
  ];

  userSearch = '';
  get filteredUsers() {
    const q = this.userSearch.toLowerCase();
    if (!q) return this.users;
    return this.users.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
  }

  // ===== PLANOS =====
  planos: AdminPlano[] = [
    { nome: 'Gold',      preco: 'R$ 129/mês', assinantes: 13060, noites: 7,  pts: '220 pts/mês', cor: '#D4A017' },
    { nome: 'Superior',  preco: 'R$ 229/mês', assinantes: 23815, noites: 14, pts: '440 pts/mês', cor: '#0A2540' },
    { nome: 'Corporate', preco: 'Sob consulta', assinantes: 1537, noites: 0, pts: 'Personalizado', cor: '#00A8A8' },
  ];

  // ===== HOTÉIS =====
  hotels: AdminHotel[] = [
    { name: 'Pousada Maré Alta',  cidade: 'Jericoacoara, CE', estrelas: 4, reservas: 284, status: 'Ativo'    },
    { name: 'Hotel Vila Serrana', cidade: 'Campos do Jordão, SP', estrelas: 5, reservas: 512, status: 'Ativo' },
    { name: 'Resort Praia Azul',  cidade: 'Porto de Galinhas, PE', estrelas: 5, reservas: 196, status: 'Ativo' },
    { name: 'Pousada do Sol',     cidade: 'Florianópolis, SC', estrelas: 3, reservas: 88,  status: 'Inativo'  },
    { name: 'Hotel Atlântico',    cidade: 'Rio de Janeiro, RJ', estrelas: 4, reservas: 604, status: 'Ativo'   },
    { name: 'Casa das Pedras',    cidade: 'Gramado, RS',      estrelas: 4, reservas: 0,   status: 'Pendente'  },
  ];

  hotelSearch = '';
  get filteredHotels() {
    const q = this.hotelSearch.toLowerCase();
    if (!q) return this.hotels;
    return this.hotels.filter(h => h.name.toLowerCase().includes(q) || h.cidade.toLowerCase().includes(q));
  }

  // ===== RESERVAS =====
  reservas: AdminReserva[] = [
    { id: '#RDC-4821', guest: 'Ana Souza',     hotel: 'Pousada Maré Alta',  datas: '15–18 mai',  noites: 3, status: 'Confirmada', valor: 'R$ 2.547' },
    { id: '#RDC-4820', guest: 'Rafael Lima',   hotel: 'Hotel Vila Serrana', datas: '22–25 jun',  noites: 3, status: 'Pendente',   valor: 'R$ 3.747' },
    { id: '#RDC-4819', guest: 'Carlos Mendes', hotel: 'Hotel Atlântico',    datas: '10–12 mai',  noites: 2, status: 'Confirmada', valor: 'R$ 1.960' },
    { id: '#RDC-4818', guest: 'Lucia Alves',   hotel: 'Resort Praia Azul',  datas: '01–04 mai',  noites: 3, status: 'Concluída',  valor: 'R$ 2.940' },
    { id: '#RDC-4817', guest: 'João Pereira',  hotel: 'Pousada do Sol',     datas: '20–22 abr',  noites: 2, status: 'Cancelada',  valor: 'R$ 1.600' },
  ];

  resSearch = '';
  get filteredReservas() {
    const q = this.resSearch.toLowerCase();
    if (!q) return this.reservas;
    return this.reservas.filter(r => r.guest.toLowerCase().includes(q) || r.hotel.toLowerCase().includes(q) || r.id.toLowerCase().includes(q));
  }

  // ===== FINANCEIRO =====
  finMetrics = [
    { label: 'Receita Mai/26',   value: 'R$ 1,31M', delta: '+5,6%',   deltaPos: true,  icon: 'money'  },
    { label: 'Ticket médio',     value: 'R$ 185',   delta: '+R$ 12',  deltaPos: true,  icon: 'card'   },
    { label: 'Inadimplência',    value: '1,4%',     delta: '−0,2%',   deltaPos: true,  icon: 'trend'  },
    { label: 'Receita anual',    value: 'R$ 14,8M', delta: '+22% YoY',deltaPos: true,  icon: 'money'  },
  ];

  finLancamentos = [
    { data: '01/05/2026', desc: 'Receita assinaturas — Mai/26', tipo: 'entrada', valor: 'R$ 1.309.200' },
    { data: '05/05/2026', desc: 'Repasse parceiros (hotéis)',   tipo: 'saida',   valor: 'R$ 328.400'   },
    { data: '10/05/2026', desc: 'Comissão plataforma pagamento',tipo: 'saida',   valor: 'R$ 13.092'    },
    { data: '15/05/2026', desc: 'Reembolso cancelamentos',      tipo: 'saida',   valor: 'R$ 4.600'     },
    { data: '30/04/2026', desc: 'Receita assinaturas — Abr/26', tipo: 'entrada', valor: 'R$ 1.240.000' },
  ];

  // ===== CMS =====
  cmsItens = [
    { tipo: 'Banner', titulo: 'Promo Inverno 2026', status: 'Publicado', atualizado: 'Ontem' },
    { tipo: 'Destino', titulo: 'Jericoacoara',      status: 'Publicado', atualizado: '3 dias' },
    { tipo: 'Destino', titulo: 'Gramado no inverno',status: 'Rascunho',  atualizado: '1 sem'  },
    { tipo: 'Blog',    titulo: 'Como usar suas noites Gold', status: 'Publicado', atualizado: '2 sem' },
    { tipo: 'FAQ',     titulo: 'Posso transferir noites?', status: 'Publicado', atualizado: '1 mês' },
    { tipo: 'Banner',  titulo: 'Black Friday 2026',  status: 'Rascunho',  atualizado: 'Ontem'  },
  ];

  get sectionTitle() { return this.sectionLabels[this.activeSection]; }

  statusVariant(status: AdminUser['status']): 'success' | 'warn' | 'error' {
    return status === 'Ativa' ? 'success' : status === 'Pendente' ? 'warn' : 'error';
  }

  hotelStatusVariant(s: AdminHotel['status']): 'success' | 'neutral' | 'warn' {
    return s === 'Ativo' ? 'success' : s === 'Pendente' ? 'warn' : 'neutral';
  }

  resStatusVariant(s: AdminReserva['status']): 'success' | 'warn' | 'error' | 'neutral' {
    if (s === 'Confirmada') return 'success';
    if (s === 'Pendente')   return 'warn';
    if (s === 'Cancelada')  return 'error';
    return 'neutral';
  }

  initials(name: string) {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  }

  stars(n: number) { return '★'.repeat(n) + '☆'.repeat(5 - n); }
}
