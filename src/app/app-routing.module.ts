import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { BrandListarComponent } from './component/brand/brand-listar/brand-listar.component';
import { BrandCreaeditaComponent } from './component/brand/brand-creaedita/brand-creaedita.component';
import { ColorComponent } from './component/color/color.component';
import { ColorListarComponent } from './component/color/color-listar/color-listar.component';
import { TypeclothingComponent } from './component/typeclothing/typeclothing.component';
import { EventComponent } from './component/event/event.component';
import { ColorCreaeditaComponent } from './component/color/color-creaedita/color-creaedita.component';
const routes: Routes = [
  {
    path:'brands',component:BrandComponent,children:[
      {path:'nuevo',component:BrandCreaeditaComponent},
      {path:'ediciones/:id',component:BrandCreaeditaComponent},
    ]
  },
  {
    path:'colores',component:ColorComponent,children:[
      {path:'nuevo',component:ColorCreaeditaComponent},
      {path:'ediciones/:id',component:ColorCreaeditaComponent},
    ]
  },
  {
    path:'events',component:EventComponent,children:[

    ]
  },
  {
    path:'typeClothings',component:TypeclothingComponent,children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
