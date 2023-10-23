import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask-2';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authenticate/login/login.component';
import { HomeComponent } from './authenticated/home/home.component';
import { HotelComponent } from './authenticated/hotel/hotel.component';
import { CadatroClienteComponent } from './authenticated/Clientes/cadatro-cliente/cadatro-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CadastroAcomodacoesComponent } from './authenticated/Acomodações/cadastro-acomodacoes/cadastro-acomodacoes.component';
import { ListQuartosComponent } from './authenticated/Acomodações/list-quartos/list-quartos.component';
import { ProcuraClienteComponent } from './authenticated/Clientes/procura-cliente/procura-cliente.component';
import { DetalheClienteComponent } from './authenticated/Clientes/detalhe-cliente/detalhe-cliente.component';
import { CalendarioQuartosComponent } from './authenticated/Reservas/calendario-quartos/calendario-quartos.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CadastroReservaComponent } from './authenticated/Reservas/cadastro-reserva/cadastro-reserva.component';
import { MatDividerModule } from '@angular/material/divider';
import { ReservaCalendarioDetailComponent } from './authenticated/Reservas/reserva-calendario-detail/reserva-calendario-detail.component';
import { ProcurarReservaComponent } from './authenticated/Reservas/procurar-reserva/procurar-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HotelComponent,
    CadatroClienteComponent,
    CadastroAcomodacoesComponent,
    ListQuartosComponent,
    ProcuraClienteComponent,
    DetalheClienteComponent,
    CalendarioQuartosComponent,
    CadastroReservaComponent,
    ReservaCalendarioDetailComponent,
    ProcurarReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    FullCalendarModule,
    ReactiveFormsModule,
    MatDividerModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
