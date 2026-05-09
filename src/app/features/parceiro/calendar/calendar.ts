import { Component } from '@angular/core';

type DayState = 'high' | 'med' | 'low' | 'sold' | null;

interface CalendarDay {
  day: number | null;
  state: DayState;
}

@Component({
  selector: 'app-parceiro-calendar',
  standalone: true,
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class ParceiroCalendarComponent {
  weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  private states: Record<number, DayState> = {
    3: 'low', 4: 'low', 5: 'med', 6: 'high', 7: 'sold',
    10: 'med', 11: 'high', 12: 'high', 13: 'sold',
    17: 'low', 18: 'med', 19: 'med', 20: 'high', 21: 'high',
    24: 'med', 25: 'high', 26: 'high', 27: 'sold',
  };

  days: CalendarDay[] = Array.from({ length: 35 }, (_, i) => {
    const d = i - 1;
    const inMonth = d >= 1 && d <= 30;
    return { day: inMonth ? d : null, state: inMonth ? (this.states[d] ?? null) : null };
  });

  barColor(state: DayState): string {
    switch (state) {
      case 'sold': return '#EF4444';
      case 'high': return '#10B981';
      case 'med':  return '#F59E0B';
      case 'low':  return '#E5E7EB';
      default:     return 'transparent';
    }
  }
}
