export class Pessoa {
  id?: number;
  nome_fantasia: string;
  razao_social: string;
  tipo_pessoa: string;
  cnpj_cpf: string;
  rg_ie: string;
  data_nascimento: Date | null; // Esta propriedade deve ser ajustada para o tipo de data apropriado
  telefone: string;
  celular: string;
  email: string;
  cliente: boolean;
  vendedor: boolean;
  transportadora: boolean;
  fornecedor: boolean;
  ativo: boolean;
  data_cadastro: Date; // Esta propriedade deve ser ajustada para o tipo de data apropriado
  ultima_alteracao: Date; // Esta propriedade deve ser ajustada para o tipo de data apropriado

  constructor() {
    this.id = 0;
    this.nome_fantasia = '';
    this.razao_social = '';
    this.tipo_pessoa = '';
    this.data_nascimento = new Date();
    this.cnpj_cpf = '';
    this.rg_ie = '';
    this.telefone = '';
    this.celular = '';
    this.email = '';
    this.cliente = false;
    this.vendedor = false;
    this.transportadora = false;
    this.fornecedor = false;
    this.ativo = false;
    this.data_cadastro = new Date();
    this.ultima_alteracao = new Date();
  }
}
