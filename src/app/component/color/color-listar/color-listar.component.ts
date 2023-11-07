import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Color } from 'src/app/model/color';
import { ColorService } from 'src/app/service/color.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-color-listar',
  templateUrl: './color-listar.component.html',
  styleUrls: ['./color-listar.component.css']
})
export class ColorListarComponent implements OnInit {
  dataSource:MatTableDataSource<Color>=new MatTableDataSource();
  displayedColumns:string[]=['idColor','nombreColor','descripcion','tipoColor','accion2','accion'];
  @ViewChild(MatPaginator)paginator!:MatPaginator;
  constructor(private cS:ColorService){}
  ngOnInit(): void {
    this.cS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
    this.cS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }
  eliminar(idColor:number){
    this.cS.delete(idColor).subscribe((data)=>{
      this.cS.list().subscribe((data)=>{
        this.cS.setList(data);
      });
    });
  }
  filter(co:any){
    this.dataSource.filter=co.target.value.trim();
  }
}
