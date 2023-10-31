import { Observable,Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Brand } from '../model/brand';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private url=`${base_url}/brands`
  private listaCambio=new Subject<Brand[]>()
  constructor(private http:HttpClient) { }
  //insert, list, delete, listid

  list(){
    return this.http.get<Brand[]>(this.url);
  }
  insert(br:Brand){
    return this.http.post(this.url,br);
  }
  setList(listaNueva:Brand[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(idBrand:number){
    return this.http.get<Brand>(`${this.url}/${idBrand}`);
  }
  delete(idBrand:number){
    return this.http.delete(`${this.url}/${idBrand}`);
  }

}
