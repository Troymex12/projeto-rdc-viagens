import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then(m => m.LoginComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./features/public/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'planos',
    loadComponent: () =>
      import('./features/public/planos/planos').then(m => m.PlanosComponent),
  },
  {
    path: 'hotel/:id',
    loadComponent: () =>
      import('./features/public/hotel-details/hotel-details').then(m => m.HotelDetailsComponent),
  },
  {
    path: 'hoteis',
    loadComponent: () =>
      import('./features/public/hoteis/hoteis').then(m => m.HoteisConveniadosComponent),
  },
  {
    path: 'destinos',
    loadComponent: () =>
      import('./features/public/destinos/destinos').then(m => m.DestinosComponent),
  },
  {
    path: 'empresas',
    loadComponent: () =>
      import('./features/public/empresas/empresas').then(m => m.EmpresasComponent),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./features/public/blog/blog').then(m => m.BlogComponent),
  },
  {
    path: 'busca',
    loadComponent: () =>
      import('./features/busca/busca/busca').then(m => m.BuscaComponent),
  },
  {
    path: 'portal',
    loadComponent: () =>
      import('./features/portal/portal/portal').then(m => m.PortalComponent),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout/checkout').then(m => m.CheckoutComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin/admin').then(m => m.AdminComponent),
  },
  {
    path: 'b2b',
    loadComponent: () =>
      import('./features/b2b/b2b/b2b').then(m => m.B2bComponent),
  },
  {
    path: 'parceiro',
    loadComponent: () =>
      import('./features/parceiro/parceiro/parceiro').then(m => m.ParceiroComponent),
  },
  { path: '**', redirectTo: '' },
];
