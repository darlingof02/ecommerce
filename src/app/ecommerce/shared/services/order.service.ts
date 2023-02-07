import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppConfig } from './app.config';

interface Order {

}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private API_URL = AppConfig.API_URL;

  constructor(private http: HttpClient, private router: Router) { }

  getUserOrder(id:number): Observable<any> {
    return this.http.get(this.API_URL + "/orders/" + id)
    .pipe(map((res) => {
      return res;
    }));
  }

  placeOrder(id:number): Observable<any> {
    return this.http.post(this.API_URL + "/orders/" + id, {})
    .pipe(map((res) => {
      return res;
    }))
  }

  getAllOrder(id:number): Observable<any> {
    return this.http.get(this.API_URL + "/orders/all/" + id)
    .pipe(map((res) => {
      return res;
    }));
  }
}
