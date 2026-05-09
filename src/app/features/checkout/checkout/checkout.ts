import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { CheckoutStepperComponent } from '../stepper/stepper';
import { CheckoutSummaryComponent, CheckoutPlan } from '../summary/summary';
import { ButtonComponent } from '../../../shared/button/button';
import { IconComponent } from '../../../shared/icon/icon';
import { InputComponent } from '../../../shared/input/input';
import { AlertComponent } from '../../../shared/alert/alert';
import { LogoComponent } from '../../../shared/logo/logo';

type PayMethod = 'card' | 'pix' | 'boleto';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    FormsModule,
    CheckoutStepperComponent,
    CheckoutSummaryComponent,
    ButtonComponent,
    IconComponent,
    InputComponent,
    LogoComponent,
    KeyValuePipe,
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class CheckoutComponent {
  step = 0;
  selectedPlan: 'Gold' | 'Superior' | 'Black' = 'Superior';
  payMethod: PayMethod = 'card';

  stepLabels = ['Plano', 'Seus dados', 'Pagamento', 'Pronto!'];

  plans: Record<'Gold' | 'Superior' | 'Black', CheckoutPlan> = {
    Gold:     { tier: 'Gold',     price: 199, nights: 7,  points: '12.000' },
    Superior: { tier: 'Superior', price: 349, nights: 14, points: '30.000' },
    Black:    { tier: 'Black',    price: 599, nights: 21, points: '50.000' },
  };

  payMethods = [
    { id: 'card'   as PayMethod, label: 'Cartão',  icon: 'card'    },
    { id: 'pix'    as PayMethod, label: 'Pix',     icon: 'money'   },
    { id: 'boleto' as PayMethod, label: 'Boleto',  icon: 'filePie' },
  ];

  form = {
    nome: '', email: '', cpf: '', telefone: '',
    nascimento: '', cep: '',
    cardNumber: '', validade: '', cvv: '', cardName: '',
  };

  get currentPlan(): CheckoutPlan {
    return this.plans[this.selectedPlan];
  }

  constructor(private router: Router) {}

  next() { this.step = Math.min(3, this.step + 1); }
  back() { this.step = Math.max(0, this.step - 1); }

  goPortal() { this.router.navigate(['/portal']); }
}
