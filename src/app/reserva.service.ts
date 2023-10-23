import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from './Models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private apiUrl = 'http://localhost:8080/api/reservas'; // Substitua pela URL correta da sua API

  constructor(private http: HttpClient) {}

  // Método para buscar as reservas dos quartos da API
  getReservas(): Observable<Reserva[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para cadastrar uma nova reserva na API
  cadastrarReserva(reserva: Reserva): Observable<any> {
    return this.http.post<any>(this.apiUrl, reserva);
  }

  //Método para buscar reserva por ID
  getReservaPorId(reservaId: number): Observable<Reserva> {
    const url = `${this.apiUrl}/${reservaId}`;
    return this.http.get<Reserva>(url);
  }

  searchReservas(searchTerm: string): Observable<Reserva[]> {
    const url = `${this.apiUrl}/search?term=${searchTerm}`;
    return this.http.get<Reserva[]>(url);
  }

}



