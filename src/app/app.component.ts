import { Component } from '@angular/core';
import { AuthService } from './ecommerce/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  constructor(
    public authService: AuthService
  ) { }
}
