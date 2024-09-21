import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'a',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];
