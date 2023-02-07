import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, public userService: UserService) { }

  ngOnInit(): void { 
  }

  logout(): void {
    this.authService.logout()
    .subscribe((res) => {
      if (res.success) {
        
      }
    });
  }

}
