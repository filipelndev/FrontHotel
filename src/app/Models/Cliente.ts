export class Cliente {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  birthdate: Date;
  idNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  notes: string;
  numero: string;

  constructor() {
    this.id = 0;
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.birthdate = new Date();
    this.idNumber = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zipCode = '';
    this.notes = '';
    this.numero = '';
  }
}
