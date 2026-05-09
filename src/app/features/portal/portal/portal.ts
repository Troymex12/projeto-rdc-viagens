import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortalSidebarComponent, PortalSection } from '../sidebar/sidebar';
import { PortalTopBarComponent } from '../top-bar/top-bar';
import { KpiCardComponent } from '../kpi-card/kpi-card';
import { ReservationRowComponent, Reservation } from '../reservation-row/reservation-row';
import { ButtonComponent } from '../../../shared/button/button';
import { IconComponent } from '../../../shared/icon/icon';
import { HotelCardComponent } from '../../public/hotel-card/hotel-card';
import { BadgeComponent } from '../../../shared/badge/badge';

interface Extrato {
  mes: string;
  descricao: string;
  tipo: 'credito' | 'debito';
  pontos: number;
}

interface Fatura {
  mes: string;
  vencimento: string;
  valor: string;
  status: 'Paga' | 'Aberta' | 'Atrasada';
}

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [
    PortalSidebarComponent,
    PortalTopBarComponent,
    KpiCardComponent,
    ReservationRowComponent,
    ButtonComponent,
    IconComponent,
    HotelCardComponent,
    BadgeComponent,
  ],
  templateUrl: './portal.html',
  styleUrl: './portal.scss',
})
export class PortalComponent {
  activeSection: PortalSection = 'home';

  sectionLabels: Record<PortalSection, string> = {
    home: 'Olá, Ana',
    hotels: 'Hotéis conveniados',
    res: 'Reservas',
    nights: 'Minhas noites',
    points: 'Pontos',
    finance: 'Financeiro',
    profile: 'Perfil',
    settings: 'Configurações',
  };

  reservations: Reservation[] = [
    {
      name: 'Pousada Maré Alta',
      location: 'Jericoacoara, CE',
      dates: '15–18 mai 2026',
      status: 'Confirmada',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&auto=format&fit=crop',
    },
    {
      name: 'Hotel Vila Serrana',
      location: 'Campos do Jordão, SP',
      dates: '22–25 jun 2026',
      status: 'Pendente',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop',
    },
    {
      name: 'Resort Praia Azul',
      location: 'Porto de Galinhas, PE',
      dates: '12–15 set 2025',
      status: 'Concluída',
      image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&auto=format&fit=crop',
    },
    {
      name: 'Pousada do Sol',
      location: 'Florianópolis, SC',
      dates: '03–05 mar 2025',
      status: 'Concluída',
      image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?w=400&auto=format&fit=crop',
    },
  ];

  resTabs = ['Todas', 'Confirmadas', 'Pendentes', 'Concluídas'];
  activeResTab = 'Todas';

  quickActions = [
    { icon: 'search', label: 'Buscar hotéis', variant: 'teal' as const },
    { icon: 'hotel', label: 'Hotéis conveniados', variant: 'primary' as const },
    { icon: 'card', label: 'Ver faturas', variant: 'ghost' as const },
  ];

  conveniados = [
    {
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop',
      name: 'Pousada Maré Alta',
      location: 'Jericoacoara, CE',
      rating: 4.8, reviews: 284, price: '849', nights: '1 noite Gold',
      badge: { variant: 'promo', label: 'Promo −25%' }, favorited: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
      name: 'Hotel Vila Serrana',
      location: 'Campos do Jordão, SP',
      rating: 4.9, reviews: 512, price: '1.249', nights: '1 noite Superior',
      badge: null, favorited: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?w=800&auto=format&fit=crop',
      name: 'Hotel Atlântico',
      location: 'Rio de Janeiro, RJ',
      rating: 4.6, reviews: 604, price: '980', nights: '1 noite Gold',
      badge: null, favorited: false,
    },
  ];

  // ===== MINHAS NOITES =====
  noitesPlan = 'Superior';
  noitesTotal = 14;
  noitesUsadas = 6;
  noitesRestantes = 8;
  noitesExpiracao = '31 dez 2026';

  historicoNoites = [
    { hotel: 'Pousada Maré Alta', local: 'Jericoacoara, CE', data: 'Mar 2026', noites: 2, tipo: 'usado' as const },
    { hotel: 'Pousada do Sol', local: 'Florianópolis, SC', data: 'Jan 2026', noites: 2, tipo: 'usado' as const },
    { hotel: 'Resort Praia Azul', local: 'Porto de Galinhas, PE', data: 'Set 2025', noites: 2, tipo: 'usado' as const },
  ];

  get noitesPct() { return Math.round((this.noitesUsadas / this.noitesTotal) * 100); }

  // ===== PONTOS =====
  pontosSaldo = 24580;
  pontosProxExpiracao = 3200;
  pontosExpiraEm = '30 jun 2026';

  extrato: Extrato[] = [
    { mes: 'Mai 2026', descricao: 'Reserva confirmada – Pousada Maré Alta', tipo: 'credito', pontos: 1700 },
    { mes: 'Abr 2026', descricao: 'Renovação mensal do plano Superior', tipo: 'credito', pontos: 440 },
    { mes: 'Mar 2026', descricao: 'Resgate – upgrade de quarto', tipo: 'debito', pontos: 2000 },
    { mes: 'Mar 2026', descricao: 'Reserva confirmada – Pousada do Sol', tipo: 'credito', pontos: 960 },
    { mes: 'Fev 2026', descricao: 'Renovação mensal do plano Superior', tipo: 'credito', pontos: 440 },
    { mes: 'Jan 2026', descricao: 'Reserva confirmada – Resort Praia Azul', tipo: 'credito', pontos: 1960 },
  ];

  resgates = [
    { label: 'Upgrade de quarto', pontos: '2.000 pts', descricao: 'Solicite upgrade no check-in' },
    { label: 'Diária grátis', pontos: '8.000 pts', descricao: 'Converta pontos em 1 noite' },
    { label: 'Experiência gourmet', pontos: '4.500 pts', descricao: 'Jantar para 2 em hotel parceiro' },
    { label: 'Late check-out', pontos: '1.200 pts', descricao: 'Saída até 16h sem custo extra' },
  ];

  // ===== FINANCEIRO =====
  faturas: Fatura[] = [
    { mes: 'Maio 2026',  vencimento: '10/05/2026', valor: 'R$ 229,00', status: 'Aberta' },
    { mes: 'Abril 2026', vencimento: '10/04/2026', valor: 'R$ 229,00', status: 'Paga' },
    { mes: 'Março 2026', vencimento: '10/03/2026', valor: 'R$ 229,00', status: 'Paga' },
    { mes: 'Fev 2026',   vencimento: '10/02/2026', valor: 'R$ 229,00', status: 'Paga' },
    { mes: 'Jan 2026',   vencimento: '10/01/2026', valor: 'R$ 229,00', status: 'Paga' },
  ];

  cartao = { final: '4521', bandeira: 'Visa', expira: '08/2028' };

  faturaStatusVariant(s: Fatura['status']): 'success' | 'warn' | 'error' | 'neutral' {
    if (s === 'Paga') return 'success';
    if (s === 'Aberta') return 'warn';
    return 'error';
  }

  // ===== PERFIL =====
  perfil = {
    nome: 'Ana Carolina Souza',
    email: 'ana.souza@email.com',
    telefone: '(11) 99234-5678',
    cpf: '•••.•••.•••-12',
    nascimento: '14/03/1990',
    cidade: 'São Paulo',
    estado: 'SP',
    plano: 'Superior',
    membro: 'desde Jan 2024',
  };

  editandoPerfil = false;

  // ===== CONFIGURAÇÕES =====
  notifEmail = true;
  notifPush = true;
  notifSms = false;
  notifPromocoes = true;
  twoFactor = false;

  constructor(private router: Router) {}

  get sectionTitle(): string { return this.sectionLabels[this.activeSection]; }

  get filteredReservations(): Reservation[] {
    if (this.activeResTab === 'Todas') return this.reservations;
    return this.reservations.filter(r => {
      if (this.activeResTab === 'Confirmadas') return r.status === 'Confirmada';
      if (this.activeResTab === 'Pendentes')   return r.status === 'Pendente';
      if (this.activeResTab === 'Concluídas')  return r.status === 'Concluída';
      return true;
    });
  }

  goBusca()      { this.router.navigate(['/busca']); }
  goConveniados(){ this.router.navigate(['/hoteis']); }
}
