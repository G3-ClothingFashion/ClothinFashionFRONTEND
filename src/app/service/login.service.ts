import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpContext } from '@angular/common/http';
import { JwtRequest } from '../model/jwtRequest';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(request:JwtRequest){
    return this.http.post("http://localhost:8085/authenticate",request);
  }
  verificar(){
    let token=sessionStorage.getItem("token");
    return token!=null;
  }
  showRole(){
    let token=sessionStorage.getItem("token");
    if(!token){
      return null;
    }
    const helper=new JwtHelperService();
    const decodeToken=helper.decodeToken(token);
    return decodeToken?.role;
  }
}
