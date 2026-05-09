import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo';
import { InputComponent } from '../../../shared/input/input';
import { ButtonComponent } from '../../../shared/button/button';

export interface SearchParams {
  destino: string;
  checkin: string;
  checkout: string;
  hospedes: string;
}

@Component({
  selector: 'app-search-header',
  standalone: true,
  imports: [LogoComponent, InputComponent, ButtonComponent],
  templateUrl: './search-header.html',
  styleUrl: './search-header.scss',
})
export class SearchHeaderComponent {
  @Input() params: SearchParams = { destino: 'Jericoacoara, CE', checkin: '15 mai', checkout: '18 mai', hospedes: '2 adultos' };
  @Output() search = new EventEmitter<SearchParams>();

  onSearch() { this.search.emit(this.params); }
}
