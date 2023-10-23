import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ReservaService } from '../../../reserva.service';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservaCalendarioDetailComponent } from '../reserva-calendario-detail/reserva-calendario-detail.component';
import { Reserva } from 'src/app/Models/reserva';


@Component({
  selector: 'app-calendario-quartos',
  templateUrl: './calendario-quartos.component.html',
  styleUrls: ['./calendario-quartos.component.css']
})
export class CalendarioQuartosComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: []
  };

  constructor(private reservaService: ReservaService, public dialog: MatDialog) {}

  ngOnInit() {
    this.reservaService.getReservas().subscribe((reservas: any[]) => {
      this.calendarOptions.events = this.formatReservasForCalendar(reservas);
    });
  }

  formatReservasForCalendar(reservas: any[]): any[] {
    // Formate os dados das reservas para o formato esperado pelo FullCalendar
    return reservas.map((reserva) => ({
      title: `Quarto ${reserva.quarto.numero}`,
      start: reserva.dataReserva,
      end: reserva.dataConfirmacao,
      reservaId: reserva.id,
    }));
  }

  openReservaDetails(eventInfo: any) {
    if (eventInfo.event.extendedProps.reservaId) {
      this.dialog.open(ReservaCalendarioDetailComponent, {
        width: '500px',
        data: { reservaId: eventInfo.event.extendedProps.reservaId },
      });
    }
  }

}
