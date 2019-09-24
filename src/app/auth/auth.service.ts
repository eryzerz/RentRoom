import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false

  get isAuthenticated() {
    return this._isAuthenticated
  }

  constructor(private router: Router) { }

  login() {
    this._isAuthenticated = true
    this.router.navigate(['/places/tabs/discover'])
  }

  logout() {
    this._isAuthenticated = false
    this.router.navigate(['/auth'])
  }
}
