import { Component } from '@angular/core';
import { TICKETS } from '../../../../shared/mocks/tickets.mock';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  tickets = TICKETS;
}