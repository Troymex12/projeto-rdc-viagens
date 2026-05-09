import { Component } from '@angular/core';

@Component({
  selector: 'app-spark-chart',
  standalone: true,
  templateUrl: './spark-chart.html',
  styleUrl: './spark-chart.scss',
})
export class SparkChartComponent {
  private pts = [20, 35, 28, 45, 38, 55, 48, 62, 58, 70, 65, 80];

  get linePath(): string {
    const max = Math.max(...this.pts);
    const min = Math.min(...this.pts);
    return this.pts
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * (400 / 11)} ${100 - ((p - min) / (max - min)) * 90}`)
      .join(' ');
  }

  get areaPath(): string {
    return `${this.linePath} L 400 100 L 0 100 Z`;
  }
}
