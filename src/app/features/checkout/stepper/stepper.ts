import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../shared/icon/icon';

@Component({
  selector: 'app-checkout-stepper',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
})
export class CheckoutStepperComponent {
  @Input() current = 0;
  @Input() steps: string[] = [];

  getState(i: number): 'done' | 'active' | 'idle' {
    return i < this.current ? 'done' : i === this.current ? 'active' : 'idle';
  }

  isConnectorDone(i: number): boolean {
    return i < this.current;
  }
}
