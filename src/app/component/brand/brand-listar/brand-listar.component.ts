import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Brand } from 'src/app/model/brand';
import { BrandService } from 'src/app/service/brand.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-brand-listar',
  templateUrl: './brand-listar.component.html',
  styleUrls: ['./brand-listar.component.css']
})
export class BrandListarComponent implements OnInit{
  dataSource:MatTableDataSource<Brand>=new MatTableDataSource();
  displayedColumns:string[]=['idMarca','nombreMarca','pais','webSite','descripcion','tags','accion2','accion'];
  @ViewChild(MatPaginator)paginator!:MatPaginator;

  constructor(private bS:BrandService){}
  ngOnInit(): void {
    this.bS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
    this.bS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }
  eliminar(idBrand:number){
    this.bS.delete(idBrand).subscribe((data)=>{
      this.bS.list().subscribe((data)=>{
        this.bS.setList(data);
      });
    });
  }
  filter(br:any){
    this.dataSource.filter=br.target.value.trim();
  }
}
