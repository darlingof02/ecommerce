import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppConfig } from './app.config';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private API_URL = AppConfig.API_URL;
  
  constructor(private http: HttpClient, private router: Router, public userService: UserService) { }

  getCart(id: number): Observable<any> {
    return this.http.get(this.API_URL + "/users/cart/" + this.userService.getUserId())
    .pipe(map((res) => {
      // console.log(res);
      return JSON.parse(JSON.stringify(res)).itemList;
    }));
  }

  addItem(uid: number, iid: number) {
    return this.http.post(this.API_URL + "/users/cart/" + iid + "/" + uid, {})
    .pipe(map((res) => {
      // this.router.navigate(['/cart']);
      return res;
    }))
  }
}
