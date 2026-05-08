import { Routes } from '@angular/router';

import { MainLayout } from './layout/main-layout/main-layout';

import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Tickets } from './features/tickets/pages/tickets/tickets';
import { Reports } from './features/reports/pages/reports/reports';
import { Settings } from './features/settings/pages/settings/settings';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'tickets',
        component: Tickets
      },
      {
        path: 'reports',
        component: Reports
      },
      {
        path: 'settings',
        component: Settings
      }
    ]
  }
];