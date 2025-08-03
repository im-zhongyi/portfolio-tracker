import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TranslateModule, MatButtonModule, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  constructor(private translate: TranslateService) {
    // translate.setDefaultLang('en');
    translate.use('dashboard');
  }

   chartData = [
    { data: [10, 20, 30, 40], label: 'Portfolio Value' }
  ];

  chartLabels = ['Jan', 'Feb', 'Mar', 'Apr'];

  chartType: ChartType = 'pie'; // or 'bar', 'doughnut', etc.

  chartLegend = true;

chartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true
    },
    legend: {
      position: 'top'
    }
  }
};
}
