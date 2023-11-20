import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ClothingService } from 'src/app/service/clothing.service';

@Component({
  selector: 'app-reporte-casas',
  templateUrl: './reporte-casas.component.html',
  styleUrls: ['./reporte-casas.component.css']
})
export class ReporteCasasComponent {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private cS: ClothingService) {}
  ngOnInit(): void {
    this.cS.getCountClothingBySeason().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.nameSeason);
      this.barChartData = [
        {
          data: data.map((item) => item.quantityClothing),
          label:'Cantidad Total de Prendas',
          backgroundColor:'rgba(0,0,255,0.5)'
        },
      ];
    });
}
}
