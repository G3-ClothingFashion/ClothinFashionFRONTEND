import { Subject,Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Event } from '@angular/router';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url=`${base_url}/events`
  private listaCambio=new Subject<Event[]>()
  constructor(private http:HttpClient) { }

  insert(ev:Event){
    return this.http.post(this.url,ev);
  }
  delete(idEvent:number){
    return this.http.delete(`${this.url}/${idEvent}`);
  }
  list(){
    return this.http.get<Event[]>(this.url);
  }
  setList(listaNueva:Event[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(idEvent:number){
    return this.http.get<Event>(`${this.url}/${idEvent}`);
  }

  //UPDATE Y BUSCAR
  update(ev:Event){
    return this.http.put(this.url,ev);
  }
}
