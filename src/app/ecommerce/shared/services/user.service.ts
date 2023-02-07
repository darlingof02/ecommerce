import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userId = -1;

  initialzeId(userId: number) {
    this.userId = userId;
    this.saveUserId();
  }

  saveUserId(): void {
    localStorage.setItem('userId', JSON.stringify(this.userId));
  }

  loadUserId(): void {
    this.userId = JSON.parse(localStorage.getItem("userId") ?? '-1');
  }

  getUserId(): number {
    this.loadUserId();
    return this.userId;
  }

  removeItem(): void {
    localStorage.removeItem("userId");
    this.loadUserId();
    this.saveUserId();
    
  }

}
