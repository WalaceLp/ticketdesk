import { Component } from '@angular/core';
import { Topbar } from '../../../../layout/topbar/topbar';
import { Sidebar } from '../../../../layout/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [
    Topbar,
    Sidebar,

  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}