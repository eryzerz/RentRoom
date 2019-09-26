import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  private _isLoading = false

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

    isLoading() {
    this._isLoading = this.authService.loading
    return this._isLoading
  } 

  onLogIn() {
    this.authService.login()
  }
}
