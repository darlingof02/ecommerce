//@ts-nocheck
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response;

  constructor(public authService: AuthService,
    private router: Router, public userService: UserService) { //why public, why private, why inject
     }

  ngOnInit(): void {
    
    this.authService.checklogin(this.userService.getUserId())
    .subscribe((res) => {
      this.response = res;
      // console.log(res);
      if (res.success) {
        this.router.navigate(['/mainpage']);
      }
    });

    // this.authService.checkUserLogin(this.userService.getUserId())
    // .subscribe((res) => {
    //   console.log("isUser : " + res.success);
    //   if (res.success) {
        
    //   }
    // })
  }

  login(user) {
    this.authService.login(user)
    .subscribe((res) => {
      if (res.success) {
        this.authService.getUserId(user.username)
        .subscribe((res) => {
          console.log(res);
          this.userService.initialzeId(res);
        });
        //this.router.navigate(['/]);
      }
    });
    
  }
}

