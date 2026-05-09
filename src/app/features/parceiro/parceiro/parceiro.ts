import { Component } from '@angular/core';
import { ParceiroSidebarComponent, ParceiroSection } from '../sidebar/sidebar';
import { ParceiroCalendarComponent } from '../calendar/calendar';
import { BadgeComponent } from '../../../shared/badge/badge';
import { ButtonComponent } from '../../../shared/button/button';
import { IconComponent } from '../../../shared/icon/icon';
import { InputComponent } from '../../../shared/input/input';

type ReservationStatus = 'success' | 'warn' | 'neutral' | 'error';

interface ParceiroReserva {
  id: string;
  name: string;
  dates: string;
  noites: number;
  plano: 'Gold' | 'Superior';
  status: ReservationStatus;
  valor: string;
}

interface Avaliacao {
  autor: string;
  nota: number;
  data: string;
  comentario: string;
  respondida: boolean;
}

@Component({
  selector: 'app-parceiro',
  standalone: true,
  imports: [
    ParceiroSidebarComponent,
    ParceiroCalendarComponent,
    BadgeComponent,
    ButtonComponent,
    IconComponent,
    InputComponent,
  ],
  templateUrl: './parceiro.html',
  styleUrl: './parceiro.scss',
})
export class ParceiroComponent {
  activeSection: ParceiroSection = 'dash';

  sectionLabels: Record<ParceiroSection, string> = {
    dash:         'Dashboard',
    availability: 'Disponibilidade',
    rates:        'Tarifas',
    reservations: 'Reservas',
    reviews:      'Avaliações',
  };

  kpis = [
    { label: 'Taxa de ocupação', value: '78%',     delta: '+6pp'        },
    { label: 'Reservas do mês',  value: '124',     delta: '+18'         },
    { label: 'Receita RDC',      value: 'R$ 184k', delta: '+12,4%'      },
    { label: 'Avaliação',        value: '4.8',     delta: '284 reviews' },
  ];

  legendItems = [
    { label: 'Alta',     color: '#10B981' },
    { label: 'Média',    color: '#F59E0B' },
    { label: 'Baixa',    color: '#E5E7EB' },
    { label: 'Esgotado', color: '#EF4444' },
  ];

  recentReservations = [
    { name: 'Ana Souza',   dates: '15–18 mai', status: 'success' as const },
    { name: 'Rafael Lima', dates: '22–25 mai', status: 'warn'    as const },
    { name: 'João P.',     dates: '01–03 jun', status: 'success' as const },
  ];

  // ===== DISPONIBILIDADE =====
  meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
  mesSelecionado = 'Maio';
  tiposQuarto = [
    { tipo: 'Quarto Standard', disponivel: 12, total: 15, tarifa: 'R$ 380' },
    { tipo: 'Quarto Deluxe',   disponivel: 6,  total: 8,  tarifa: 'R$ 580' },
    { tipo: 'Suíte',           disponivel: 2,  total: 3,  tarifa: 'R$ 980' },
    { tipo: 'Chalé',           disponivel: 4,  total: 4,  tarifa: 'R$ 1.200' },
  ];

  // ===== TARIFAS =====
  tarifas = [
    { periodo: 'Baixa temporada',   inicio: '01/03 – 30/06', standard: 'R$ 380', deluxe: 'R$ 580', suite: 'R$ 980'   },
    { periodo: 'Média temporada',   inicio: '01/07 – 30/09', standard: 'R$ 520', deluxe: 'R$ 780', suite: 'R$ 1.380' },
    { periodo: 'Alta temporada',    inicio: '01/10 – 28/02', standard: 'R$ 720', deluxe: 'R$ 980', suite: 'R$ 1.780' },
    { periodo: 'Feriados especiais',inicio: 'Carnaval, Réveillon', standard: 'R$ 980', deluxe: 'R$ 1.380', suite: 'R$ 2.200' },
  ];

  descontoRDC = 15;

  // ===== RESERVAS =====
  reservas: ParceiroReserva[] = [
    { id: '#RDC-4821', name: 'Ana Souza',     dates: '15–18 mai', noites: 3, plano: 'Superior', status: 'success', valor: 'R$ 1.140' },
    { id: '#RDC-4820', name: 'Rafael Lima',   dates: '22–25 mai', noites: 3, plano: 'Gold',     status: 'warn',    valor: 'R$ 1.140' },
    { id: '#RDC-4819', name: 'Carlos Mendes', dates: '10–12 mai', noites: 2, plano: 'Superior', status: 'success', valor: 'R$ 760'   },
    { id: '#RDC-4818', name: 'Lucia Alves',   dates: '01–04 mai', noites: 3, plano: 'Gold',     status: 'neutral', valor: 'R$ 1.140' },
    { id: '#RDC-4817', name: 'João Pereira',  dates: '20–22 abr', noites: 2, plano: 'Gold',     status: 'error',   valor: 'R$ 760'   },
  ];

  resSearch = '';
  get filteredReservas() {
    const q = this.resSearch.toLowerCase();
    if (!q) return this.reservas;
    return this.reservas.filter(r => r.name.toLowerCase().includes(q) || r.id.toLowerCase().includes(q));
  }

  // ===== AVALIAÇÕES =====
  avaliacoes: Avaliacao[] = [
    { autor: 'Ana Souza',     nota: 5, data: 'Maio 2026',  comentario: 'Lugar incrível! Atendimento impecável, quartos muito confortáveis. Certamente voltaremos.', respondida: true  },
    { autor: 'Rafael Lima',   nota: 4, data: 'Abril 2026', comentario: 'Ótima experiência no geral. Café da manhã excelente. O Wi-Fi poderia ser melhor.', respondida: false },
    { autor: 'Mariana Costa', nota: 5, data: 'Abril 2026', comentario: 'Tudo perfeito! A vista do chalé é de tirar o fôlego. Vale cada noite.', respondida: true  },
    { autor: 'Carlos Mendes', nota: 3, data: 'Março 2026', comentario: 'Boa estadia, mas esperava mais pela localização privilegiada. O quarto era menor que o esperado.', respondida: false },
  ];

  notaMedia = 4.8;
  distribuicao = [
    { nota: 5, pct: 72 },
    { nota: 4, pct: 18 },
    { nota: 3, pct: 7  },
    { nota: 2, pct: 2  },
    { nota: 1, pct: 1  },
  ];

  get sectionTitle() { return this.sectionLabels[this.activeSection]; }

  statusLabel(s: ReservationStatus) {
    if (s === 'success') return 'Confirmada';
    if (s === 'warn')    return 'Pendente';
    if (s === 'error')   return 'Cancelada';
    return 'Concluída';
  }

  initials(name: string) { return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(); }
  stars(n: number)        { return '★'.repeat(n) + '☆'.repeat(5 - n); }
  dispPct(q: { disponivel: number; total: number }) { return Math.round((q.disponivel / q.total) * 100); }
}
