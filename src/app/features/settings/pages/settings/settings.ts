import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class Settings {
  notifications = true;
  slaAlerts = true;
  compactMode = false;
}