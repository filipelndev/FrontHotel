import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontHotel';
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Verifique o estado de autenticação e decida se a sidenav deve ser exibida
    if (!this.authService.isAuthenticated()) {
      this.authService.logout();
      this.router.navigate(['/login'])
    }
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  // Verifique se o usuário está autenticado
  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  // Método para fazer logout
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
