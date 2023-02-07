//@ts-nocheck
import { Injectable } from '@angular/core';
// import { Http, URLSearchParams } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from './app.config';
import { BehaviorSubject, Observable, pipe, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ItemService } from './item.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = AppConfig.API_URL;

  loggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);

  userLoggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);

  adminLoggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router, public itemService: ItemService, public userService: UserService) { }

  login(user): Observable<any> {
    let params = new HttpParams();
    params = params.append("username", user.username);
    params = params.append("password", user.password);
    return this.http.post<any>(this.API_URL + "/login", params, { withCredentials: false})
      .pipe(map((res) => {
        this.loggedIn.next(res.success);
        if (this.loggedIn) {
          this.router.navigate(['/mainpage']);
        }
        
        return res;
      }));
  }

  checklogin(id:number): Observable<any> {
    return this.http.get(this.API_URL + "/checklogin/" + id) 
      .pipe(map((res) => {
        this.loggedIn.next(res.success);
        return res;
      }));
  }

  checkUserLogin(id:number): Observable<any> {
    return this.http.get(this.API_URL + "/checkUserLogin/" + id)
    .pipe(map((res) => {
      this.userLoggedIn.next(res.success);
      return res;
    }));
  }

  checkAdminLogin(id:number): Observable<any> {
    return this.http.get(this.API_URL + "/checkAdminLogin/" + id)
    .pipe(map((res) => {
      this.adminLoggedIn.next(res.success);
      return res;
    }));
  }


  logout(): Observable<any> {
    return this.http.post(this.API_URL + "/logout", {}, { withCredentials: true })
      .pipe(map(res => {
        console.log(res);
        this.userService.removeItem();
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
        return res;
      }));
  }

  register(user): Observable<any> {
    return this.http.post(this.API_URL + "/users", user)
      .pipe(map(res => {
        console.log(res);
        if (res.success) {
          this.router.navigate(['/login']);
        }
      }));
  }

  getUserId(username): number {
    return this.http.get(this.API_URL + "/users/userid/" + username)
    .pipe(map(res => {
      // console.log(res);
      return res;
    }))
  }

}