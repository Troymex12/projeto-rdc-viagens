import { Component } from '@angular/core';
import { B2bSidebarComponent, B2bSection } from '../sidebar/sidebar';
import { BadgeComponent } from '../../../shared/badge/badge';
import { ButtonComponent } from '../../../shared/button/button';
import { IconComponent } from '../../../shared/icon/icon';
import { InputComponent } from '../../../shared/input/input';

type EmpStatus = 'success' | 'warn' | 'neutral';

interface Employee {
  name: string;
  email: string;
  dept: string;
  plan: 'Superior' | 'Gold';
  usedNights: number;
  totalNights: number;
  status: EmpStatus;
}

@Component({
  selector: 'app-b2b',
  standalone: true,
  imports: [B2bSidebarComponent, BadgeComponent, ButtonComponent, IconComponent, InputComponent],
  templateUrl: './b2b.html',
  styleUrl: './b2b.scss',
})
export class B2bComponent {
  activeSection: B2bSection = 'dash';

  sectionLabels: Record<B2bSection, string> = {
    dash:      'Dashboard corporativo',
    employees: 'Colaboradores',
    reports:   'Uso & relatórios',
    billing:   'Faturamento',
    settings:  'Configurações',
  };

  kpis = [
    { label: 'Colaboradores ativos', value: '42',      sub: 'de 50 vagas'        },
    { label: 'Noites utilizadas',    value: '148',     sub: 'de 420 disponíveis' },
    { label: 'Economia total',       value: 'R$ 182k', sub: 'vs. reembolsos'     },
    { label: 'Satisfação',           value: '94%',     sub: 'pesquisa interna'   },
  ];

  employees: Employee[] = [
    { name: 'Ana Souza',      email: 'ana@empresa.com',     dept: 'Marketing',  plan: 'Superior', usedNights: 4,  totalNights: 14, status: 'success' },
    { name: 'Rafael Lima',    email: 'rafael@empresa.com',  dept: 'Engenharia', plan: 'Gold',     usedNights: 2,  totalNights: 6,  status: 'success' },
    { name: 'Mariana Costa',  email: 'mariana@empresa.com', dept: 'Vendas',     plan: 'Gold',     usedNights: 6,  totalNights: 6,  status: 'warn'    },
    { name: 'João Pereira',   email: 'joao@empresa.com',    dept: 'Financeiro', plan: 'Superior', usedNights: 0,  totalNights: 14, status: 'neutral' },
    { name: 'Paula Santos',   email: 'paula@empresa.com',   dept: 'RH',         plan: 'Gold',     usedNights: 3,  totalNights: 6,  status: 'success' },
    { name: 'Carlos Mendes',  email: 'carlos@empresa.com',  dept: 'Engenharia', plan: 'Superior', usedNights: 8,  totalNights: 14, status: 'success' },
  ];

  empSearch = '';
  get filteredEmployees() {
    const q = this.empSearch.toLowerCase();
    if (!q) return this.employees;
    return this.employees.filter(e => e.name.toLowerCase().includes(q) || e.dept.toLowerCase().includes(q));
  }

  // Relatórios
  reportMeses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];
  reportNoites = [18, 24, 31, 38, 37];
  reportDepts = [
    { dept: 'Engenharia', noites: 52, colaboradores: 14 },
    { dept: 'Vendas',     noites: 38, colaboradores: 9  },
    { dept: 'Marketing',  noites: 24, colaboradores: 7  },
    { dept: 'Financeiro', noites: 18, colaboradores: 6  },
    { dept: 'RH',         noites: 16, colaboradores: 6  },
  ];
  maxNoitesDept = 52;

  // Faturamento
  faturas = [
    { mes: 'Maio 2026',   venc: '10/05/2026', valor: 'R$ 7.920,00', status: 'Aberta' as const },
    { mes: 'Abril 2026',  venc: '10/04/2026', valor: 'R$ 7.920,00', status: 'Paga'   as const },
    { mes: 'Março 2026',  venc: '10/03/2026', valor: 'R$ 7.920,00', status: 'Paga'   as const },
    { mes: 'Fev 2026',    venc: '10/02/2026', valor: 'R$ 7.920,00', status: 'Paga'   as const },
  ];

  contratoInfo = {
    empresa: 'TechCorp Ltda',
    cnpj: '12.345.678/0001-90',
    vagas: 50,
    plano: 'Corporate Anual',
    renovacao: '01/01/2027',
    responsavel: 'Fernanda Rocha (RH)',
  };

  // Configurações
  notifEmail = true;
  notifRelatorio = true;
  autoRenovacao = true;
  permiteUpgrade = false;

  get sectionTitle() { return this.sectionLabels[this.activeSection]; }

  usagePct(e: Employee) { return Math.round((e.usedNights / e.totalNights) * 100); }
  barColor(e: Employee) { return e.status === 'warn' ? '#F59E0B' : '#00A8A8'; }
  statusLabel(s: EmpStatus) { return s === 'warn' ? 'Quase esgotado' : s === 'neutral' ? 'Sem uso' : 'Ativo'; }
  initials(name: string) { return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(); }
  faturaVariant(s: 'Paga' | 'Aberta'): 'success' | 'warn' { return s === 'Paga' ? 'success' : 'warn'; }
}
