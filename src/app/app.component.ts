import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Nist80053detailComponent } from './components/nist80053detail/nist80053detail.component';
import { WorkflowVisualizerComponent } from './components/workflow-visualizer/workflow-visualizer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet,
            Nist80053detailComponent,
            WorkflowVisualizerComponent,
            HttpClientModule,
            
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oscal-parser-frontend';
}
