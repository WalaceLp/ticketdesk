import { Component } from '@angular/core';
import { REPORTS } from '../../../../shared/mocks/reports.mock';

@Component({
  selector: 'app-reports',
  imports: [],
  templateUrl: './reports.html',
  styleUrl: './reports.scss'
})
export class Reports {
  data = REPORTS;
}