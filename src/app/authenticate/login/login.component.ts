import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Mensagem de erro

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        this.authService.isLoggedIn = response;
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Falha no login:', error);
        this.errorMessage = "Login falhou, verifique o email e a senha!"
        this.clearErrorMessage();
      }
    );
  }

  clearErrorMessage() {
    setTimeout(() => {
      this.errorMessage = ''; // Limpa a mensagem de erro após 4 segundos
    }, 4000);
  }
}
