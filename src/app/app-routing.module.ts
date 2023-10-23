import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authenticate/login/login.component';
import { HomeComponent } from './authenticated/home/home.component';
import { AuthGuard } from './service/auth.guard';
import { CadatroClienteComponent } from './authenticated/Clientes/cadatro-cliente/cadatro-cliente.component';
import { CadastroAcomodacoesComponent } from './authenticated/Acomodações/cadastro-acomodacoes/cadastro-acomodacoes.component';
import { ListQuartosComponent } from './authenticated/Acomodações/list-quartos/list-quartos.component';
import { ProcuraClienteComponent } from './authenticated/Clientes/procura-cliente/procura-cliente.component';
import { CalendarioQuartosComponent } from './authenticated/Reservas/calendario-quartos/calendario-quartos.component';
import { CadastroReservaComponent } from './authenticated/Reservas/cadastro-reserva/cadastro-reserva.component';
import { ProcurarReservaComponent } from './authenticated/Reservas/procurar-reserva/procurar-reserva.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-cliente', component: CadatroClienteComponent /* canActivate: [AuthGuard]*/ },
  { path: 'lista-cliente', component: ProcuraClienteComponent, /* canActivate: [AuthGuard]*/ },
  { path: 'cadastro-acomodacoes', component: CadastroAcomodacoesComponent, /* canActivate: [AuthGuard]*/ },
  { path: 'lista-quartos', component: ListQuartosComponent }, /* canActivate: [AuthGuard]*/
  { path: 'calendario', component: CalendarioQuartosComponent,/* canActivate: [AuthGuard]*/ },
  { path: 'reserva', component: CadastroReservaComponent, /* canActivate: [AuthGuard] */},
  { path: 'procura-reserva', component: ProcurarReservaComponent, /*canActivate: [AuthGuard] */},
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona para a página de login por padrão.
  { path: '**', redirectTo: 'home' } // Redireciona para a página de login se a rota não for encontrada.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
