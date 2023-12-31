import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/tabs/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/tabs/search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/tabs/cart/cart.page').then( m => m.CartPage)
  },
];
