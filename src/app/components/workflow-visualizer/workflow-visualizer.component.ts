import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph'; 

@Component({
  selector: 'app-workflow-visualizer',
  standalone: true,
  imports: [NgxChartsModule,NgxGraphModule],
  templateUrl: './workflow-visualizer.component.html',
  styleUrl: './workflow-visualizer.component.css'
})
export class WorkflowVisualizerComponent {
  graph = {
    nodes: [
      { id: 'Start', label: 'Start' },
      { id: 'Step1', label: 'Step 1' },
      { id: 'Step2', label: 'Step 2' },
      { id: 'End', label: 'End' },
    ],
    links: [
      { source: 'Start', target: 'Step1' },
      { source: 'Step1', target: 'Step2' },
      { source: 'Step2', target: 'End' },
    ],
  };

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
