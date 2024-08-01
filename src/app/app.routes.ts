import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':id',
    loadComponent: () => import('./layouts/board/board.component').then(m => m.BoardComponent)
  },
  {
    path: 'members',
    loadComponent: () => import('./layouts/board/board.component').then(m => m.BoardComponent)
  },
  {
    path: '',
    redirectTo: ':id',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ':id'
  }
];
