import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private API_URL = AppConfig.API_URL;

  constructor(private http: HttpClient, private router: Router) { }

  getAllItems(): Observable<any> {
    return this.http.get(this.API_URL + "/items", {withCredentials: true})
    .pipe(map((res) => {
      // console.log(res);
      return res;
    }));
  }

  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.API_URL + "/items", item, { withCredentials: false})
      .pipe(map((res) => {
        return res;
      }));
  }
}
