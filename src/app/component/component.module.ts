import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import { ComponentRoutingModule } from './component-routing.module';
import { BrandComponent } from './brand/brand.component';
import { BrandListarComponent } from './brand/brand-listar/brand-listar.component';
import { BrandCreaeditaComponent } from './brand/brand-creaedita/brand-creaedita.component';
import { EventComponent } from './event/event.component';
import { EventCreaeditaComponent } from './event/event-creaedita/event-creaedita.component';
import { EventListarComponent } from './event/event-listar/event-listar.component';
import { ColorComponent } from './color/color.component';
import { ColorCreaeditaComponent } from './color/color-creaedita/color-creaedita.component';
import { ColorListarComponent } from './color/color-listar/color-listar.component';
import { TypeclothingComponent } from './typeclothing/typeclothing.component';
import { TypeclothingCreaeditaComponent } from './typeclothing/typeclothing-creaedita/typeclothing-creaedita.component';
import { TypeclothingListarComponent } from './typeclothing/typeclothing-listar/typeclothing-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReporteComponent } from './reporte/reporte.component';
import { Reporte01Component } from './reporte/reporte01/reporte01.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
   BrandComponent,
   BrandCreaeditaComponent,
   BrandListarComponent,
   EventComponent,
   EventCreaeditaComponent,
   EventListarComponent,
   ColorComponent,
   ColorCreaeditaComponent,
   ColorListarComponent,
   TypeclothingComponent,
   TypeclothingCreaeditaComponent,
   TypeclothingListarComponent,
   ReporteComponent,
   Reporte01Component
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    HttpClientModule,
    MatListModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgChartsModule
  ]
})
export class ComponentModule { }
