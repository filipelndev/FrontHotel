import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  private loginUrl = 'http://localhost:8080/api/usuario/login';

  public isLoggedIn = true; // Estado de autenticação inicial

  login(email: string, password: string) {
    const data = { email, password };
    return this.http.post(this.loginUrl, data);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  isLogged(): boolean {
    return this.isLoggedIn=true
  }
}
