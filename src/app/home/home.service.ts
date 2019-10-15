import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HomeComponent} from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  _url= 'http://localhost:8080/country'

  constructor(private http: HttpClient) { }
  
  registeration(reg: HomeComponent) {
    return this.http.post<any>(this._url, reg);
  }
}
