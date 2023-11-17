import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartOptions, ChartDataset } from 'chart.js';
import { BrandService } from 'src/app/service/brand.service';
@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css'],
})
export class Reporte01Component implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private bS: BrandService) {}
  ngOnInit(): void {
    this.bS.getCount().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.country);
      this.barChartData = [
        {
          data: data.map((item) => item.idClothing),
          label: 'Cantidad',
          backgroundColor: 'rgba(0,0,255,0.5)',
        },
      ];
    });
  }
}
