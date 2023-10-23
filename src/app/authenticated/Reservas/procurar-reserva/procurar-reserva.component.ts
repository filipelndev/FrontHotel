import { Component } from '@angular/core';
import { Reserva } from 'src/app/Models/reserva';
import { ReservaService } from 'src/app/reserva.service';

@Component({
  selector: 'app-procurar-reserva',
  templateUrl: './procurar-reserva.component.html',
  styleUrls: ['./procurar-reserva.component.css']
})
export class ProcurarReservaComponent {
  searchTerm: string = '';
  reservas: Reserva[] = [];
  reservasFiltradas: Reserva[] = []; // Lista para armazenar reservas filtradas
  reserva?: Reserva;
  selectedReserva: Reserva | null = null;

  constructor(private reservaService: ReservaService) {}

  searchReservas() {
    this.reservaService.getReservas().subscribe((reservas) => {
      this.reservas = reservas;
      this.reservasFiltradas = reservas; // Inicialmente, ambas as listas têm os mesmos dados
      this.selectedReserva = null;

      // Aplicar a filtragem se houver um termo de pesquisa
      if (this.searchTerm.trim() !== '') {
        this.reservasFiltradas = this.reservas.filter((reserva) =>
          reserva.dataReserva
        );
      }
    });
  }

  showReservaDetails(reserva: Reserva) {
    if (reserva.id) {
      // Verifica se o ID da reserva não é undefined
      this.reservaService.getReservaPorId(reserva.id).subscribe((reserva) => {
        this.selectedReserva = reserva;
      });
    }
  }
}
