import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule}from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule}from '@angular/material/input';
import {MatDatepickerModule}from '@angular/material/datepicker';
import {MatButtonModule}from '@angular/material/button';
import {MatTableModule}from '@angular/material/table';
import {MatNativeDateModule}from '@angular/material/core';
import {MatPaginatorModule}from '@angular/material/paginator';
import {MatMenuModule}from '@angular/material/menu';
import {MatIconModule}from '@angular/material/icon';
import { EventComponent } from './component/event/event.component';
import { ColorComponent } from './component/color/color.component';
import { BrandComponent } from './component/brand/brand.component';
import { TypeclothingComponent } from './component/typeclothing/typeclothing.component';
import { BrandListarComponent } from './component/brand/brand-listar/brand-listar.component';
import { TypeclothingListarComponent } from './component/typeclothing/typeclothing-listar/typeclothing-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ColorComponent,
    BrandComponent,
    TypeclothingComponent,
    BrandListarComponent,
    TypeclothingListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
