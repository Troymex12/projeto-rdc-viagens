import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../../../shared/logo/logo';
import { ButtonComponent } from '../../../shared/button/button';
import { InputComponent } from '../../../shared/input/input';
import { IconComponent } from '../../../shared/icon/icon';

type AuthTab = 'entrar' | 'cadastro';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent, ButtonComponent, InputComponent, IconComponent, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  tab: AuthTab = 'entrar';

  // Entrar
  email = '';
  senha = '';
  senhaVisible = false;
  loginError = '';

  // Cadastro
  nome = '';
  cadEmail = '';
  cadSenha = '';
  cadSenhaVisible = false;
  planoSelecionado: 'gold' | 'superior' = 'gold';

  planos = [
    {
      id: 'gold' as const,
      label: 'Gold',
      price: 'R$ 129/mês',
      noites: '7 noites/ano',
      color: '#D4A017',
      bg: '#FDF8E7',
    },
    {
      id: 'superior' as const,
      label: 'Superior',
      price: 'R$ 229/mês',
      noites: '14 noites/ano',
      color: '#0A2540',
      bg: '#E8EFF7',
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(p => {
      if (p['tab'] === 'cadastro') this.tab = 'cadastro';
    });
  }

  toggleSenha() { this.senhaVisible = !this.senhaVisible; }
  toggleCadSenha() { this.cadSenhaVisible = !this.cadSenhaVisible; }

  onEntrar() {
    if (!this.email || !this.senha) {
      this.loginError = 'Preencha e-mail e senha para continuar.';
      return;
    }
    this.loginError = '';
    this.router.navigate(['/portal']);
  }

  onCadastrar() {
    this.router.navigate(['/portal']);
  }

  onGoogleLogin() {
    this.router.navigate(['/portal']);
  }
}
