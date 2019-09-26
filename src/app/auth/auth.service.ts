import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false
  loading = false

  get isAuthenticated() {
    return this._isAuthenticated
  }

  constructor(private router: Router) { }

  login() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this._isAuthenticated = true
      this.router.navigate(['/places/tabs/discover'])
    }, 2000)
    
  }

  logout() {
    this._isAuthenticated = false
    this.router.navigate(['/auth'])
  }
}
