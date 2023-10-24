import { Component } from '@angular/core';
import { Pessoa } from '../../../Models/Pessoa';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadatro-pessoa',
  templateUrl: './cadatro-pessoa.component.html',
  styleUrls: ['./cadatro-pessoa.component.css']
})
export class CadatroPessoaComponent {
  pessoa: Pessoa = new Pessoa();
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      nome_fantasia: ['', Validators.required],
      razao_social: ['', Validators.required],
      tipo_pessoa: ['', Validators.required],
      cnpj_cpf: ['', Validators.required],
      rg_ie: '',
      data_nascimento: '',
      telefone: '',
      celular: '',
      email: ['', [Validators.required, Validators.email]],
      // Outros campos e validações aqui
    });
  }

  onSubmit() {
    this.pessoa = { ...this.pessoa, ...this.form.value };

    this.pessoa.cliente = true;
    this.pessoa.ativo = true;
    this.pessoa.celular = '+55 ' + this.pessoa.celular;
    this.pessoa.telefone = '+55 ' + this.pessoa.telefone;
    this.pessoa.data_cadastro = new Date();
    this.pessoa.ultima_alteracao = new Date();
    this.pessoa.tipo_pessoa = '1';

    if(this.pessoa.nome_fantasia == '')
    {
      this.pessoa.nome_fantasia = 'Particular';
    }

    const apiUrl = 'http://127.0.0.1:8000/pessoa/';

    this.http.post(apiUrl, this.pessoa).subscribe((response: any) => {
      console.log('Pessoa cadastrada com sucesso:', response);

      this.form.reset();
    });
  }
}
