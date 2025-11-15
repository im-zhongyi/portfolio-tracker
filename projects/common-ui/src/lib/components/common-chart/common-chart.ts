import { Component, Input, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'lib-common-chart',
  imports: [BaseChartDirective],
  templateUrl: './common-chart.html',
  styleUrl: './common-chart.css'
})
export class CommonChart {
  @Input() labels:string[]=[]; 
  @Input() datasets:{ data: number[]; label: string; }[]=[];
  @Input() type:ChartType='bar'; //bar, line, scatter, bubble, pie, doughnut, polarArea, radar 
  @Input() legend = true;
  @Input() chartTooltip: boolean = true;
  @Input() legendPosition: "left"| "right"| "top"| "bottom"| "chartArea" ='top';
  

  options: ChartOptions = {
    responsive: true,
    maintainAspectRatio:false,
    plugins: {
      tooltip: {
        enabled: this.chartTooltip
      },
      legend: {
        position: this.legendPosition
      }
    }
  };

}
