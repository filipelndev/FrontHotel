import { Component } from '@angular/core';
import { Cliente } from '../../../Models/Cliente';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadatro-cliente',
  templateUrl: './cadatro-cliente.component.html',
  styleUrls: ['./cadatro-cliente.component.css']
})
export class CadatroClienteComponent {
  customer: Cliente = new Cliente();
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {this.form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    birthdate: ['', Validators.required],
    address: ['', Validators.required],
    idNumber: ['', Validators.required],
    numero: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    notes: [''],

    // Outros campos e validações aqui
  });}

  onSubmit() {
    // Defina a URL da API para cadastro de cliente
    const apiUrl = 'http://localhost:8080/api/clientes';

    // Faça a solicitação HTTP POST com os dados do cliente
    this.http.post(apiUrl, this.form.value).subscribe((response: any) => {
      console.log('Cliente cadastrado com sucesso:', response);

      // Limpe o formulário ou realize ação adicional após o cadastro
      this.form.reset();
    });
  }
}
