import { Component } from '@angular/core';
import { QuartosService } from '../../../service/quartos.service';
import { Quarto } from '../../../Models/Quarto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-acomodacoes',
  templateUrl: './cadastro-acomodacoes.component.html',
  styleUrls: ['./cadastro-acomodacoes.component.css']
})
export class CadastroAcomodacoesComponent {
  quarto: Quarto = {
    numero: '',
    descricao: '',
    preco: 0,
    tipo: '', // Incluímos o campo "tipo"
    capacidade: 0 // Incluímos o campo "capacidade"
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    // Envie os dados do quarto para o serviço
    const apiUrl = 'http://localhost:8080/api/quartos';

    // Faça a solicitação HTTP POST com os dados do quarto
    this.http.post(apiUrl, this.quarto).subscribe((response: any) => {
      console.log('Quarto cadastrado com sucesso:', response);

      // Limpe o formulário após o cadastro (opcional)
      this.quarto = {
        numero: '',
        descricao: '',
        preco: 0,
        tipo: '', // Certifique-se de incluir o campo "tipo" aqui
        capacidade: 0 // Certifique-se de incluir o campo "capacidade" aqui
      };
    });
  }
}





