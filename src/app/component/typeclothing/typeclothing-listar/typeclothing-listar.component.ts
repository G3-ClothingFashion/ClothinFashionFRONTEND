import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TypeClothing } from 'src/app/model/typeclothing';
import { TypeclothingService } from 'src/app/service/typeclothing.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-typeclothing-listar',
  templateUrl: './typeclothing-listar.component.html',
  styleUrls: ['./typeclothing-listar.component.css']
})
export class TypeclothingListarComponent implements OnInit{
  dataSource:MatTableDataSource<TypeClothing>=new MatTableDataSource();
  displayedColumns:string[]=['idTipoPrenda','talla','genero','descripcion','categoria','ocasion','accion01','accion02'];
  @ViewChild(MatPaginator)paginator!:MatPaginator;
  constructor(private tcS:TypeclothingService){}
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
  eliminar(id:number){
    this.tcS.delete(id).subscribe((data)=>{
      this.tcS.list().subscribe((data)=>{
        this.tcS.setList(data);
      });
    });
  }
  filter(en:any){
    this.dataSource.filter=en.target.value.trim();
  }
}
