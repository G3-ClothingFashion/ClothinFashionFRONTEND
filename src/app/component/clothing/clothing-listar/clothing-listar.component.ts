import { LoginService } from './../../../service/login.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Clothing } from 'src/app/model/clothing';
import { ClothingService } from 'src/app/service/clothing.service';

@Component({
  selector: 'app-clothing-listar',
  templateUrl: './clothing-listar.component.html',
  styleUrls: ['./clothing-listar.component.css']
})
export class ClothingListarComponent implements OnInit{
  dataSource:MatTableDataSource<Clothing>= new MatTableDataSource();
  displayedColumns:string[]=['idPrenda','temporada','textura', 'color', 'evento', 'catalogo','tienda', 'closet', 'marca', 'tipo','accion01','accion02',];
  @ViewChild(MatPaginator)paginator!:MatPaginator;
  constructor(private tcS:ClothingService, private LoginService: LoginService){}
  ngOnInit(): void {
    this.tcS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
    this.tcS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
}
eliminar(idClothing:number){
  this.tcS.delete(idClothing).subscribe((data)=>{
    this.tcS.list().subscribe((data)=>{
      this.tcS.setList(data);
    });
  });
}
filter(en:any){
  this.dataSource.filter=en.target.value.trim();
}
role: string = ""
verificar() {
  this.role = this.LoginService.showRole();
  return this.LoginService.verificar();
}
}
