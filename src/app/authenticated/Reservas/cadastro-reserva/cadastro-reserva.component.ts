import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../../Models/Cliente';
import { QuartosService } from '../../../service/quartos.service';
import { Quarto } from '../../../Models/Quarto';
import { Reserva } from 'src/app/Models/reserva';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cadastro-reserva',
  templateUrl: './cadastro-reserva.component.html',
  styleUrls: ['./cadastro-reserva.component.css']
})
export class CadastroReservaComponent implements OnInit {
  maxPessoasPermitidas: number = 1;
  numeroPessoas: number = 1;
  searchClient: string = '';
  filteredClients: Cliente[] = [];
  CheckinData: Date = new Date();
  CheckoutData: Date = new Date();
  reserva: Reserva = {
    quarto: undefined,
    dataReserva: new Date(),
    dataCheckin: new Date(),
    dataCheckout: new Date(),
    numeroPessoas: 1,
    clientes: [],
  };
  clientes: Cliente[] = [];
  selectedClients: Cliente[] = [];
  quartos: Quarto[] = [];
  quartoSelecionado: Quarto | undefined;

  constructor(private http: HttpClient, public quartosService: QuartosService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.carregarClientes();
    this.carregarQuartos();
  }

  carregarClientes() {
    this.http.get<Cliente[]>('http://localhost:8080/api/clientes').subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }

  carregarQuartos() {
    this.quartosService.obterQuartos().subscribe((quartos: Quarto[]) => {
      this.quartos = quartos;
    });
  }

  onSubmit() {


    const dataAtual = new Date();

    this.reserva.clientes = this.selectedClients;
    this.reserva.dataReserva = dataAtual;

    this.reserva.quarto = this.quartoSelecionado;

    const apiUrl = 'http://localhost:8080/api/reservas';

    this.http.post(apiUrl, this.reserva).subscribe((response: any) => {
      console.log('Reserva cadastrada com sucesso:', response);

      this.reserva = {
        quarto: undefined,
        dataReserva: new Date(),
        dataCheckin: new Date(),
        dataCheckout: new Date(),
        numeroPessoas: 1,
        clientes: [], // Alterei para clientesIds conforme sua interface Reserva
      };
    });
  }

  filterClients() {
    this.filteredClients = this.clientes.filter((cliente) =>
      cliente.fullName.toLowerCase().includes(this.searchClient.toLowerCase()) ||
      cliente.idNumber.includes(this.searchClient)
    );
  }

  addSelectedClient(cliente: Cliente) {

        this.selectedClients.push(cliente);
        console.log('Cliente adicionado:', cliente);
        console.log('selectedClients:', this.selectedClients);

  }

  removeSelectedClient(cliente: Cliente) {
    const index = this.selectedClients.findIndex((c) => c.id === cliente.id);
    if (index !== -1) {
      this.selectedClients.splice(index, 1);
    }
  }

  updateMaxPessoasPermitidas() {
    this.maxPessoasPermitidas = this.reserva.numeroPessoas || 1;
  }

  updateNumeroQuarto() {
    if (this.quartoSelecionado) {
      this.reserva.quarto = this.quartoSelecionado;
    } else {
      this.reserva.quarto = undefined;
    }
  }
}
