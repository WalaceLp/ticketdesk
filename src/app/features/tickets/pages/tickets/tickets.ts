import { Component } from '@angular/core';
import { TICKETS } from '../../../../shared/mocks/tickets.mock';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tickets',
  imports: [
    NgClass,
    MatIconModule,
  ],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss'
})
export class Tickets {
  tickets = TICKETS;
}