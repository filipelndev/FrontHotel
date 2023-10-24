import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../../Models/Pessoa';
import { MatDialog } from '@angular/material/dialog';
import { DetalheClienteComponent } from '../detalhe-cliente/detalhe-cliente.component';

@Component({
  selector: 'app-procura-cliente',
  templateUrl: './procura-cliente.component.html',
  styleUrls: ['./procura-cliente.component.css']
})
export class ProcuraClienteComponent implements OnInit {
  clientes: Pessoa[] = [];
  nomePesquisa: string = '';

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes() {
    // Atualize a URL para localhost:8080
    this.http.get<Pessoa[]>('http://127.0.0.1:8000/pessoa/').subscribe((data: Pessoa[]) => {
      this.clientes = data;
    });
  }

  pesquisarClientes() {
    // Atualize a URL para localhost:8080
    this.http.get<Pessoa[]>(`http://localhost:8080/api/clientes/buscar?nome=${this.nomePesquisa}`).subscribe((data: Pessoa[]) => {
      this.clientes = data;
    });
  }

  abrirDetalhesCliente(cliente: any): void {
    const dialogRef = this.dialog.open(DetalheClienteComponent, {
      width: '250px',
      data: cliente
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Popup fechado');
    });
  }
}
