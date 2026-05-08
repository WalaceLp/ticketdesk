import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class Topbar {}