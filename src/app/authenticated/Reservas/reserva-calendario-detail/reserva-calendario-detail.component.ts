import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reserva } from 'src/app/Models/reserva';
import { ReservaService } from 'src/app/reserva.service';



@Component({
  selector: 'app-reserva-calendario-detail',
  templateUrl: './reserva-calendario-detail.component.html',
  styleUrls: ['./reserva-calendario-detail.component.css']
})
export class ReservaCalendarioDetailComponent implements OnInit {
  reserva?: Reserva;

  constructor(
    public dialogRef: MatDialogRef<ReservaCalendarioDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reservaService: ReservaService
  ) {}

  ngOnInit() {
    if (this.data.reservaId) {
      // Se uma ID de reserva for fornecida, busque os detalhes da reserva
      this.reservaService.getReservaPorId(this.data.reservaId).subscribe((reserva: Reserva) => {
        this.reserva = reserva;
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
