import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent implements OnInit {

  DataCadastro: string | null = ''
  UltimaAlteracao: string | null = '';
  formDirty: boolean = false;

  constructor(

    public dialogRef: MatDialogRef<DetalheClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private datePipe: DatePipe

  ) {}

  ngOnInit(): void {

    this.DataCadastro = this.datePipe.transform(this.data.data_cadastro, 'yyyy-MM-ddTHH:mm:ss');
    this.UltimaAlteracao = this.datePipe.transform(this.data.ultima_alteracao, 'yyyy-MM-ddTHH:mm:ss');

  }

  onFieldChange() {
    this.formDirty = true;
  }

  saveChanges() {

    const apiUrl = `http://127.0.0.1:8000/pessoa/${this.data.id}/`;
    this.data.ultima_alteracao = new Date();
    this.http.put(apiUrl, this.data).subscribe((response: any) => {
      console.log('Pessoa Atualizada com sucesso:', response);
    });

    this.DataCadastro = this.datePipe.transform(this.data.data_cadastro, 'yyyy-MM-ddTHH:mm:ss');
    this.UltimaAlteracao = this.datePipe.transform(this.data.ultima_alteracao, 'yyyy-MM-ddTHH:mm:ss');

  }
}
