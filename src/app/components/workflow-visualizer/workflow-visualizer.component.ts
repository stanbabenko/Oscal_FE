import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-workflow-visualizer',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './workflow-visualizer.component.html',
  styleUrl: './workflow-visualizer.component.css'
})
export class WorkflowVisualizerComponent {
  barChartData = [
    {
      name: 'Series 1',
      value: 10,
    },
    {
      name: 'Series 2',
      value: 20,
    },
    // Add more data as needed
  ];

  // Additional configuration options
  colorScheme = 'cool';
  gradient = false;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'X Axis Label';
  yAxisLabel = 'Y Axis Label';
  autoScale = true;

}
