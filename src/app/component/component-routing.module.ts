import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { ColorCreaeditaComponent } from './color/color-creaedita/color-creaedita.component';
import { BrandComponent } from './brand/brand.component';
import { BrandCreaeditaComponent } from './brand/brand-creaedita/brand-creaedita.component';
import { EventComponent } from './event/event.component';
import { EventCreaeditaComponent } from './event/event-creaedita/event-creaedita.component';
import { TypeclothingComponent } from './typeclothing/typeclothing.component';
import { TypeclothingCreaeditaComponent } from './typeclothing/typeclothing-creaedita/typeclothing-creaedita.component';
import { ReporteComponent } from './reporte/reporte.component';
const routes: Routes = [
  {
    path:'brands',component:BrandComponent,children:[
      {path:'nuevo',component:BrandCreaeditaComponent},
      {path:'ediciones/:id',component:BrandCreaeditaComponent},
    ],
  },
  {
    path:'colores',component:ColorComponent,children:[
      {path:'nuevo',component:ColorCreaeditaComponent},
      {path:'ediciones/:id',component:ColorCreaeditaComponent},
    ],
  },
  {
    path:'events',component:EventComponent,children:[
      {path:'nuevo',component:EventCreaeditaComponent},
      {path:'ediciones/:id',component:EventCreaeditaComponent},
    ],
  },
  {
    path:'typeClothings',component:TypeclothingComponent,children:[
      {path:'nuevo',component:TypeclothingCreaeditaComponent},
      {path:'ediciones/:id',component:TypeclothingCreaeditaComponent},
    ],
  },
  {
    path:'reportes',component:ReporteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
