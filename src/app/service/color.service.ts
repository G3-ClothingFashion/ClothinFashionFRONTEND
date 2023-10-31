import { Observable,Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Color } from '../model/color';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private url=`${base_url}/colors`
  private listaCambio=new Subject<Color[]>()
  constructor(private http:HttpClient) { }

  //insert , delete

  insert(co:Color){
    return this.http.post(this.url,co);
  }

  delete(idColor:number){
    return this.http.delete(`${this.url}/${idColor}`);
  }
}
