import { Observable,Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TypeClothing } from '../model/typeclothing';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class TypeclothingService {
  private url=`${base_url}/typeclothings`
  private listaCambio=new Subject<TypeClothing[]>();
  constructor(private http:HttpClient) { }

  insert(tc:TypeClothing){
    return this.http.post(this.url,tc);
  }
  list(){
    return this.http.get<TypeClothing[]>(this.url);
  }
  setList(listaNueva:TypeClothing[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  delete(idTypeClothing:number){
    return this.http.delete(`${this.url}/${idTypeClothing}`);
  }
  listId(idTypeClothing:number){
    return this.http.get<TypeClothing>(`${this.url}/${idTypeClothing}`);
  }

  //UPDATE Y BUSCAR
  update(tc:TypeClothing){
    return this.http.put(this.url,tc);
  }

}
