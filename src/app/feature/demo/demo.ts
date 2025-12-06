import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonChart} from 'common-ui';
@Component({
  selector: 'app-demo',
  imports: [CommonModule, TranslateModule, MatButtonModule, CommonChart],
  templateUrl: './demo.html',
  styleUrl: './demo.scss'
})
export class Demo {
  constructor(private translate: TranslateService) {
    translate.use('dashboard');
  }

  chartData = [
    { data: [10, 20, 30, 40,50], label: 'Quantity' }
  ];

  chartLabels = ['Jan', 'Feb', 'Mar', 'Apr','May'];

  chartType1: ChartType = 'doughnut'; // or 'bar', 'doughnut', etc.
  chartType2: ChartType = 'pie';
  chartType3: ChartType = 'bar'; 
  chartType4: ChartType = 'line';
  chartType5: ChartType = 'radar'; 
  chartType6: ChartType = 'polarArea';
  chartType7: ChartType = 'bubble';
  chartType8: ChartType = 'scatter';

  chartLegend = true;

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio:false,  
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        position: 'top'
      }
    }
  };
  addItem():void{
    this.chartData.forEach(item=>{
      item.data.push(50)
    })
    this.chartLabels.push('May');
  }
  
}
