import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../../../shared/badge/badge';
import { ButtonComponent } from '../../../shared/button/button';

export interface Reservation {
  name: string;
  location: string;
  dates: string;
  status: 'Confirmada' | 'Pendente' | 'Concluída';
  image: string;
}

@Component({
  selector: 'app-reservation-row',
  standalone: true,
  imports: [BadgeComponent, ButtonComponent],
  templateUrl: './reservation-row.html',
  styleUrl: './reservation-row.scss',
})
export class ReservationRowComponent {
  @Input() reservation!: Reservation;

  get badgeVariant(): 'success' | 'warn' | 'neutral' {
    if (this.reservation.status === 'Confirmada') return 'success';
    if (this.reservation.status === 'Pendente')   return 'warn';
    return 'neutral';
  }
}
