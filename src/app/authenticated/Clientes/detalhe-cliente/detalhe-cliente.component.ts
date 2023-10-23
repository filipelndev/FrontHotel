import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent {
  constructor(
    public dialogRef: MatDialogRef<DetalheClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
