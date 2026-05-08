import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Tickets } from './features/tickets/pages/tickets/tickets';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'tickets', component: Tickets },
  { path: '**', redirectTo: 'dashboard' }
];
